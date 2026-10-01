<template>
  <div id="app">
    <div class="site-scene" aria-hidden="true">
      <div class="scene-glow scene-glow-blue"></div>
      <div class="scene-glow scene-glow-violet"></div>
      <div class="scene-grid"></div>
      <div class="scene-stars"></div>
      <div class="scene-particles">
        <span v-for="particle in particles" :key="particle.x" class="scene-particle" :style="{ '--x': `${particle.x}%`, '--y': `${particle.y}%`, '--size': `${particle.size}px`, '--duration': `${particle.duration}s`, '--delay': `${particle.delay}s` }"></span>
      </div>
      <div class="scene-meteor scene-meteor-1"></div>
      <div class="scene-meteor scene-meteor-2"></div>
      <div class="scene-waves">
        <div v-for="layer in 4" :key="layer" class="wave-layer" :class="`wave-layer-${layer}`">
          <svg viewBox="0 0 2400 240" preserveAspectRatio="none" focusable="false">
            <path d="M0 130 C200 35 400 225 600 130 C800 35 1000 225 1200 130 C1400 35 1600 225 1800 130 C2000 35 2200 225 2400 130 L2400 240 H0 Z" fill="currentColor" />
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
const particles = [
  { x: 8, y: 70, size: 4, duration: 14, delay: -3 },
  { x: 19, y: 38, size: 3, duration: 18, delay: -10 },
  { x: 35, y: 82, size: 5, duration: 16, delay: -7 },
  { x: 47, y: 23, size: 3, duration: 20, delay: -13 },
  { x: 61, y: 65, size: 4, duration: 15, delay: -5 },
  { x: 74, y: 43, size: 5, duration: 19, delay: -12 },
  { x: 86, y: 78, size: 3, duration: 17, delay: -8 },
  { x: 94, y: 27, size: 4, duration: 22, delay: -16 },
]
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
