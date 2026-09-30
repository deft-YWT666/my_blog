<template>
  <div class="blog-list-page">
    <header class="page-header">
      <h1>我的博客</h1>
      <p class="subtitle">算法笔记与绝世好题系列</p>
    </header>

    <section class="blogs-section">
      <div v-if="loading" class="status">加载中...</div>
      <div v-else-if="error" class="status error">{{ error }}</div>
      <div v-else class="blog-cards">
        <router-link
          v-for="(blog, index) in blogs"
          :key="blog.file"
          :to="`/blogs/${encodeURIComponent(blog.title)}`"
          class="blog-card"
        >
          <span class="blog-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ blog.title }}</h3>
          <span class="blog-read">阅读全文 <span class="arrow" aria-hidden="true">↗</span></span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const blogs = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const base = import.meta.env.BASE_URL || '/';
    const res = await fetch(`${base}markdown/blogs/blogs.json`)
    if (!res.ok) throw new Error('加载博客列表失败')
    blogs.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.blog-list-page {
  background-color: transparent;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 8px;
}

.subtitle {
  color: #888;
  font-size: 1rem;
}

.blogs-section {
  max-width: 1040px;
  width: 100%;
}

.status {
  text-align: center;
  color: #aaa;
  font-size: 1.1rem;
  padding: 40px 0;
}

.error {
  color: #ff6b6b;
}

.blog-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.blog-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.blog-card:hover {
  border-color: #91caff70;
  box-shadow: 0 12px 32px #0003, 0 0 24px #5174c217;
  transform: translateY(-4px);
}

.blog-card h3 {
  grid-column: 1 / -1;
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
}

.blog-number { font-family: Consolas, monospace; color: var(--violet); font-size: 0.85rem; letter-spacing: 0.12em; }
.blog-read { grid-column: 1 / -1; color: var(--muted); font-size: 0.8rem; display: flex; align-items: center; justify-content: space-between; }
@media (max-width: 600px) { .blog-cards { grid-template-columns: minmax(0, 1fr); gap: 14px; } }

.arrow {
  color: var(--accent);
  font-size: 1.2rem;
}
</style>
