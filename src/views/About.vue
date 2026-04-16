<template>
  <div class="about-page">
    <header class="page-header">
      <h1>关于我</h1>
    </header>

    <section class="content-section">
      <!-- 我的生活照 -->
      <article class="card">
        <h2>我的生活照</h2>
        <div v-if="ywtFiles.length" class="media-grid">
          <div v-for="(src, idx) in ywtFiles" :key="idx" class="media-item">
            <img :src="src" alt="生活照" />
          </div>
        </div>
        <p v-else class="empty-tip">暂无照片，期待更新~</p>
      </article>

      <!-- 我和沙雕朋友们 -->
      <article class="card">
        <h2>我和沙雕朋友们</h2>
        <div v-if="friendsFiles.length" class="media-grid">
          <template v-for="(item, idx) in friendsFiles" :key="idx">
            <img v-if="item.type === 'image'" :src="item.src" alt="朋友合照" />
            <video v-else :src="item.src" controls></video>
          </template>
        </div>
        <p v-else class="empty-tip">暂无照片，期待更新~</p>
      </article>

      <!-- 我的文艺时刻 -->
      <article class="card">
        <h2>我的文艺时刻</h2>
        
        <!-- 图片 -->
        <div v-if="musicImages.length" class="media-grid">
          <div v-for="(src, idx) in musicImages" :key="idx" class="media-item">
            <img :src="src" alt="文艺时刻" />
          </div>
        </div>

        <!-- 视频 -->
        <div v-if="musicVideos.length" class="video-grid">
          <video v-for="(src, idx) in musicVideos" :key="idx" :src="src" controls></video>
        </div>

        <!-- 音频 -->
        <div v-if="musicAudios.length" class="audio-list">
          <div v-for="(item, idx) in musicAudios" :key="idx" class="audio-item">
            <span class="audio-title">{{ item.name }}</span>
            <audio :src="item.src" controls></audio>
          </div>
        </div>

        <p v-if="!musicImages.length && !musicVideos.length && !musicAudios.length" class="empty-tip">暂无内容，期待更新~</p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ywtFiles = ref([])
const friendsFiles = ref([])
const musicImages = ref([])
const musicVideos = ref([])
const musicAudios = ref([])

onMounted(() => {
  // 生活照
  const ywtMods = import.meta.glob('../assets/ywt/*.{jpg,jpeg,png,gif,webp,bmp}', { eager: true })
  ywtFiles.value = Object.values(ywtMods).map(m => m.default)

  // 朋友们
  const friendsMods = import.meta.glob('../assets/friends/*.{jpg,jpeg,png,gif,webp,bmp,mp4,webm,mov}', { eager: true })
  friendsFiles.value = Object.entries(friendsMods).map(([path, mod]) => ({
    src: mod.default,
    type: /\.(mp4|webm|mov)$/i.test(path) ? 'video' : 'image'
  }))

  // 文艺时刻
  const musicMods = import.meta.glob('../assets/music/*.{jpg,jpeg,png,gif,webp,bmp,mp4,webm,mov,mp3,m4a}', { eager: true })
  Object.entries(musicMods).forEach(([path, mod]) => {
    const src = mod.default
    const filename = path.split('/').pop()
    if (/\.(mp4|webm|mov)$/i.test(path)) {
      musicVideos.value.push(src)
    } else if (/\.(mp3|m4a)$/i.test(path)) {
      const name = filename
        .replace(/\(1\)/g, '')
        .replace(/\.mp3$/, '')
        .replace(/\.m4a$/, '')
      musicAudios.value.push({ src, name })
    } else {
      musicImages.value.push(src)
    }
  })
})
</script>

<style scoped>
.about-page {
  background-color: #000;
  color: white;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.content-section {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #333;
}

.card h2 {
  margin-top: 0;
  color: #42b983;
  font-size: 1.4rem;
  margin-bottom: 18px;
  border-bottom: 1px solid #333;
  padding-bottom: 8px;
}

.empty-tip {
  color: #777;
  font-size: 0.95rem;
  text-align: center;
  padding: 20px 0;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.media-grid img,
.media-grid video {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top center;
  border-radius: 10px;
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
}

.media-grid img:hover,
.media-grid video:hover {
  transform: scale(1.02);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.video-grid video {
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

.audio-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.audio-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 12px 16px;
  border-radius: 8px;
  flex-wrap: wrap;
}

.audio-title {
  color: #eee;
  font-size: 0.95rem;
}

.audio-item audio {
  flex: 1;
  min-width: 220px;
}

@media (max-width: 600px) {
  .media-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  .media-grid img,
  .media-grid video {
    height: 210px;
  }
  .audio-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
