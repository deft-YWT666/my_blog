<template>
  <div class="home">
    <section class="hero" aria-labelledby="home-name">
      <div class="portrait">
        <img :src="avatar" alt="头像" class="avatar" width="1080" height="1080" fetchpriority="high" />
      </div>
      <div class="hero-content">
        <h1 id="home-name" class="name">姚伟涛</h1>
        <p class="intro"><TypewriterText text="一个热爱技术的软件工程专业学生" /></p>
        <div class="button-group">
          <router-link to="/about" class="btn">关于我</router-link>
          <router-link to="/undergraduate" class="btn">本科四年</router-link>
          <router-link to="/contact" class="btn">联系我</router-link>
          <router-link to="/blogs" class="btn">我的博客</router-link>
        </div>
        <div class="quick-info">
          <span>💬 QQ：3134069306</span>
          <a href="mailto:yaoweitao05@gmail.com">✉️ 邮箱：yaoweitao05@gmail.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import avatar from '../assets/avatar.jpg'
import TypewriterText from '../components/TypewriterText.vue'
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: calc(100svh - 140px);
  padding: 72px 40px;
  background: transparent;
  color: #f5f5f5;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(230px, 310px);
  grid-template-areas: "content portrait";
  align-items: center;
  gap: clamp(40px, 7vw, 100px);
  width: 100%;
  max-width: 1040px;
}

.portrait {
  grid-area: portrait;
  padding: 10px;
  border: 1px solid #8ab6e658;
  border-radius: 32px;
  background: linear-gradient(140deg, #172e4a, #312642);
  box-shadow: 0 24px 64px #0006, 0 0 70px #5380d51a;
  animation: portrait-float 7s ease-in-out infinite;
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
  background: linear-gradient(110deg, #fff 20%, #ace7ff 65%, #c6b3ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 0 24px;
  font-size: clamp(2.6rem, 4.5vw, 4.1rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.08em;
}

.intro {
  margin: 0;
  color: var(--muted);
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
  border: 1px solid var(--border);
  border-radius: 10px;
  color: #e3edff;
  background: rgba(255, 255, 255, 0.025);
  font-size: 0.95rem;
  text-decoration: none;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.btn:hover { border-color: #9ddfff; background: #253854; transform: translateY(-3px); box-shadow: 0 8px 26px #468ac226; }
.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }

.quick-info {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}
.quick-info :is(span, a) { overflow-wrap: anywhere; }
.quick-info a { color: inherit; text-decoration: none; }
.quick-info a:hover { color: var(--accent); }

@keyframes portrait-float { 0%, 100% { transform: translateY(0) rotate(2deg); } 50% { transform: translateY(-10px) rotate(0deg); } }

@media (max-width: 760px) {
  .home { padding: 44px 24px 52px; }
  .hero {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "portrait" "content";
    gap: 32px;
    max-width: 520px;
    text-align: center;
  }
  .portrait { width: min(50vw, 210px); padding: 7px; justify-self: center; border-radius: 24px; }
  .avatar { border-radius: 17px; }
  .name {
  background: linear-gradient(110deg, #fff 20%, #ace7ff 65%, #c6b3ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; margin-bottom: 16px; font-size: 2.45rem; }
  .button-group { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 28px auto; gap: 10px; max-width: 360px; }
  .btn { padding: 11px 18px; }
  .quick-info { justify-content: center; gap: 10px 20px; padding-top: 20px; }
}

</style>
