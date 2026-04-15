<template>
  <div id="app">
    <Header />
    <div v-if="showBack" class="back-bar">
      <button class="back-btn" @click="goBack">← 返回</button>
    </div>
    <!-- 主要内容区域，包含路由视图和侧边栏 -->
    <div class="container">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view class="main-content" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
// 引入所需的组件
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const showBack = computed(() => route.path !== '/')
const goBack = () => router.back()
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.back-bar {
  background-color: #000;
  padding: 10px 40px 0;
}

.back-btn {
  background: transparent;
  border: 1px solid #42b983;
  color: #42b983;
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #42b983;
  color: #000;
}

.container {
  display: flex;
  flex: 1;
  width: 100%;
  margin: auto;
}

.main-content {
  flex: 1;
  width: 100%;
}

@media (max-width: 768px) {
  .back-bar {
    padding: 10px 20px 0;
  }
}
</style>
