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
          v-for="blog in blogs"
          :key="blog.file"
          :to="`/blogs/${encodeURIComponent(blog.title)}`"
          class="blog-card"
        >
          <h3>{{ blog.title }}</h3>
          <span class="arrow">→</span>
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
    const res = await fetch('/markdown/blogs/blogs.json')
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
  background-color: #000;
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
  color: #42b983;
  margin-bottom: 8px;
}

.subtitle {
  color: #888;
  font-size: 1rem;
}

.blogs-section {
  max-width: 800px;
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
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.blog-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 10px;
  padding: 16px 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.blog-card:hover {
  background-color: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.blog-card h3 {
  margin: 0;
  font-size: 1.05rem;
  color: #fff;
}

.arrow {
  color: #42b983;
  font-size: 1.2rem;
}
</style>
