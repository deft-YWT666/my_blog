<template>
  <div class="home">
    <div class="center-content">
      <img src="/证件照.jpg" alt="头像" class="avatar" />
      <h1 class="name">姚伟涛</h1>
      <p class="intro">一个热爱技术的计算机相关专业大三学生</p>
      <div class="button-group">
        <router-link to="/about" class="btn">关于我</router-link>
        <router-link to="/contact" class="btn">联系我</router-link>
        <router-link to="/blogs" class="btn">我的博客</router-link>
      </div>
      <div class="quick-info">
        <span>📧 18915610140@163.com</span>
        <span>📱 18915610140</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 0;
  margin: 0;
  background-color: #000;
  color: white;
}

.center-content {
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
}

.avatar {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #42b983;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(66, 185, 131, 0.3);
}

.name {
  font-size: 2.6rem;
  color: #42b983;
  margin-bottom: 8px;
  letter-spacing: 3px;
}

.intro {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 36px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn {
  padding: 14px 32px;
  font-size: 1rem;
  color: #fff;
  border: 1px solid #42b983;
  background-color: transparent;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #42b983;
  color: #000;
}

.quick-info {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.95rem;
  color: #888;
}

.quick-info span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 768px) {
  .avatar {
    width: 110px;
    height: 110px;
  }
  .name {
    font-size: 2.2rem;
  }
}
</style>
