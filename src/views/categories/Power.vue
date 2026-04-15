<template>
    <div class="posts-page">
      <header class="page-header">
        <h1>健身的记录和总结</h1>
      </header>
  
      <section class="markdown-content" v-html="content"></section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { loadMarkdown } from '../../utils/loadMarkdown';
  
  const content = ref('');
  
  onMounted(async () => {
    // 加载 public/markdown/frontend.md 文件
    const markdownContent = await loadMarkdown('/power.md');
    content.value = markdownContent;
  });
  </script>
  
  <style scoped>
  .posts-page {
    background-color: #000;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .page-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
    color: #42b983;
  }
  
  .markdown-content {
    max-width: 900px;
    width: 100%;
    line-height: 1.6;
    font-size: 1rem;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    color: #42b983;
  }
  
  .markdown-content a {
    color: #42b983;
    text-decoration: none;
  }
  
  .markdown-content code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
    font-family: monospace;
  }
  
  .markdown-content pre {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    overflow-x: auto;
    border-radius: 6px;
  }
  </style>