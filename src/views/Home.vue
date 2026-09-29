<template>
  <div class="home">
    <section class="hero" aria-labelledby="home-name">
      <div class="portrait">
        <img :src="avatar" alt="头像" class="avatar" width="1080" height="1080" fetchpriority="high" />
      </div>
      <div class="hero-content">
        <h1 id="home-name" class="name">姚伟涛</h1>
        <p class="intro">一个热爱技术的软件工程专业学生</p>
        <div class="button-group">
          <router-link to="/about" class="btn btn-primary">关于我</router-link>
          <router-link to="/contact" class="btn">联系我</router-link>
          <router-link to="/blogs" class="btn">我的博客</router-link>
        </div>
        <div class="quick-info">
          <span>📧 18915610140@163.com</span>
          <span>📱 18915610140</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import avatar from '../assets/avatar.jpg'
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: calc(100svh - 140px);
  padding: 72px 40px;
  background: radial-gradient(ellipse at 85% 45%, #151918 0%, #080a09 42%, #000 75%);
  color: #f5f5f5;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 340px);
  grid-template-areas: "content portrait";
  align-items: center;
  gap: clamp(40px, 7vw, 100px);
  width: 100%;
  max-width: 1040px;
}

.portrait {
  grid-area: portrait;
  padding: 10px;
  border: 1px solid #343936;
  border-radius: 32px;
  background: #111513;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  transform: rotate(2deg);
}

.avatar {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 23px;
}

.hero-content { grid-area: content; min-width: 0; }

.name {
  margin: 0 0 24px;
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.08em;
}

.intro {
  margin: 0;
  color: #afb8b2;
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  line-height: 1.8;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 36px 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  box-sizing: border-box;
  padding: 12px 24px;
  border: 1px solid #414a45;
  border-radius: 10px;
  color: #e3e9e5;
  background: rgba(255, 255, 255, 0.025);
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.btn-primary { background: #42b983; border-color: #42b983; color: #071d13; font-weight: 600; }
.btn:hover { border-color: #72cea3; background: #1b3025; transform: translateY(-2px); }
.btn-primary:hover { background: #72cea3; }
.btn:focus-visible { outline: 2px solid #92dfb9; outline-offset: 4px; }

.quick-info {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding-top: 24px;
  border-top: 1px solid #2b322e;
  color: #939e97;
  font-size: 0.9rem;
  line-height: 1.6;
}
.quick-info span { overflow-wrap: anywhere; }

@media (max-width: 760px) {
  .home { padding: 44px 24px 52px; }
  .hero {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "portrait" "content";
    gap: 32px;
    max-width: 520px;
    text-align: center;
  }
  .portrait { width: min(54vw, 230px); padding: 7px; justify-self: center; border-radius: 24px; }
  .avatar { border-radius: 17px; }
  .name { margin-bottom: 16px; font-size: 2.7rem; }
  .button-group { justify-content: center; margin: 28px 0; gap: 10px; }
  .btn { padding: 11px 18px; }
  .quick-info { justify-content: center; gap: 10px 20px; padding-top: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
}
</style>
