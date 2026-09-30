<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand-row">
        <router-link to="/" class="logo"><span class="logo-name">tao</span>的个人博客</router-link>
        <button class="motion-toggle" :aria-pressed="motionEnabled" aria-label="网站动画" @click="toggleMotion">动画{{ motionEnabled ? '开' : '关' }}</button>
      </div>
      <nav class="nav" aria-label="主导航">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/undergraduate">本科四年</router-link>
        <router-link to="/blogs" :class="{ 'section-active': route.path.startsWith('/blogs') }">我的博客</router-link>
        <router-link to="/contact">联系我</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const motionEnabled = ref(true)
try { motionEnabled.value = localStorage.getItem('tao-site-motion') !== 'off' } catch {}
document.documentElement.dataset.motion = motionEnabled.value ? 'on' : 'off'

const toggleMotion = () => {
  motionEnabled.value = !motionEnabled.value
  document.documentElement.dataset.motion = motionEnabled.value ? 'on' : 'off'
  try { localStorage.setItem('tao-site-motion', motionEnabled.value ? 'on' : 'off') } catch {}
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(10, 16, 30, 0.8);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: #edf3ff;
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 40px;
}
.logo {
  color: #dfe9ff;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  text-decoration: none;
}
.logo-name { color: var(--accent); font-size: 1.5rem; font-weight: 700; letter-spacing: -0.04em; margin-right: 3px; }
.brand-row { display: flex; align-items: center; gap: 18px; }
.motion-toggle { padding: 6px 10px; border: 1px solid var(--border); border-radius: 8px; background: transparent; color: var(--muted); font-size: 0.75rem; white-space: nowrap; cursor: pointer; }
.motion-toggle:hover { border-color: var(--accent); color: var(--accent); }
.nav {
  display: flex;
  gap: 4px;
  padding: 5px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(21, 31, 51, 0.7);
}
.nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 9px;
  color: #a7b7d0;
  font-size: 0.875rem;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease, box-shadow 0.2s ease;
}
.nav a:hover { background: #24344e; color: #edf3ff; }
.nav a.router-link-exact-active, .nav a.section-active { background: linear-gradient(120deg, #204c70, #473b70); color: #e1f5ff; box-shadow: inset 0 0 0 1px #9fcdff35, 0 2px 12px #0003; font-weight: 600; }
.nav a:focus-visible, .logo:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (max-width: 820px) {
  .header-inner { flex-direction: column; gap: 14px; padding: 18px 16px 16px; }
  .nav { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); box-sizing: border-box; width: 100%; max-width: 500px; gap: 2px; padding: 4px; }
  .nav a { padding: 8px 4px; font-size: clamp(0.72rem, 2.8vw, 0.875rem); }
}
</style>
