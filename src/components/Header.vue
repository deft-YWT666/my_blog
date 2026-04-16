<template>
  <header class="header">
    <div class="logo">姚伟涛 | 个人主页</div>
    <nav class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我</router-link>
      <router-link to="/undergraduate">本科四年</router-link>
      <router-link to="/blogs">我的博客</router-link>
      <router-link to="/contact">联系我</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #1a1a1a;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}

.logo {
  font-size: 1.3em;
  font-weight: bold;
  color: #42b983;
}

.nav a {
  color: white;
  margin-left: 24px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #42b983;
}

.nav a.router-link-exact-active {
  color: #42b983;
  font-weight: 600;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 15px 20px;
    gap: 12px;
  }
  .nav a {
    margin-left: 12px;
    margin-right: 12px;
    font-size: 0.8rem;
  }
}
</style>
