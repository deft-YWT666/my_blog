<template>
  <div id="app">
    <div class="site-scene" aria-hidden="true">
      <div class="scene-glow scene-glow-blue"></div>
      <div class="scene-glow scene-glow-violet"></div>
      <div class="scene-grid"></div>
      <div class="scene-stars"></div>
      <div class="scene-waves">
        <div v-for="layer in 3" :key="layer" class="wave-layer" :class="`wave-layer-${layer}`">
          <svg viewBox="0 0 2400 180" preserveAspectRatio="none" focusable="false">
            <path d="M0 110 C200 65 400 155 600 110 C800 65 1000 155 1200 110 C1400 65 1600 155 1800 110 C2000 65 2200 155 2400 110 L2400 180 H0 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
    <Header />
    <div v-if="showBack" class="back-bar">
      <button class="back-btn" @click="goBack">← 返回</button>
    </div>
    <!-- 主要内容区域，包含路由视图和侧边栏 -->
    <div class="container">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in" appear>
          <component :is="Component" :key="route.path" class="main-content" />
        </Transition>
      </router-view>
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
import './theme.css'

const route = useRoute()
const router = useRouter()
const showBack = computed(() => route.path !== '/')
const goBack = () => router.back()
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  isolation: isolate;
}

.back-bar {
  background-color: transparent;
  padding: 10px 40px 0;
}

.back-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--accent);
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: var(--surface-hover);
  color: #fff;
}

.container {
  display: flex;
  flex: 1;
  width: 100%;
  min-width: 0;
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
