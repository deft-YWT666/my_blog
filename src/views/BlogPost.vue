<template>
  <div class="blog-post-page">
    <div v-if="loading" class="status">加载中...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <article v-else class="markdown-content" v-html="content"></article>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { loadMarkdown } from '../utils/loadMarkdown'

const route = useRoute()
const content = ref('')
const loading = ref(true)
const error = ref('')

const loadPost = async () => {
  loading.value = true
  error.value = ''
  try {
    const title = decodeURIComponent(route.params.title)
    content.value = await loadMarkdown(`/blogs/${title}.md`)
  } catch (e) {
    error.value = '加载博客内容失败，请检查文件是否存在。'
  } finally {
    loading.value = false
  }
}

onMounted(loadPost)
watch(() => route.params.title, loadPost)
</script>

<style scoped>
.blog-post-page {
  background-color: #000;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
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

.markdown-content {
  max-width: 900px;
  width: 100%;
  line-height: 1.8;
  font-size: 1rem;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid #333;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3),
.markdown-content :deep(h4) {
  color: #42b983;
  margin-top: 24px;
  margin-bottom: 12px;
}

.markdown-content :deep(p) {
  margin: 10px 0;
  color: #ddd;
}

.markdown-content :deep(a) {
  color: #42b983;
  text-decoration: none;
}

.markdown-content :deep(code) {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.markdown-content :deep(pre) {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 14px;
  overflow-x: auto;
  border-radius: 8px;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  padding-left: 20px;
  color: #ddd;
}

.markdown-content :deep(li) {
  margin-bottom: 6px;
}

.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 10px 0;
}

.markdown-content :deep(blockquote) {
  border-left: 3px solid #42b983;
  padding-left: 14px;
  margin: 14px 0;
  color: #aaa;
}

.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 14px 0;
}

.markdown-content :deep(th),
.markdown-content :deep(td) {
  border: 1px solid #444;
  padding: 8px 12px;
  text-align: left;
}

.markdown-content :deep(th) {
  background-color: rgba(66, 185, 131, 0.15);
  color: #42b983;
}
</style>
