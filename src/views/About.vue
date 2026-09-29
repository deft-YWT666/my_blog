<template>
  <div class="about-page">
    <header class="page-header">
      <h1>关于我</h1>
      <p class="photo-tip">点击照片可全屏查看</p>
    </header>

    <section class="content-section">
      <!-- 我的生活照 -->
      <article class="card">
        <h2>我的生活照</h2>
        <div v-if="ywtFiles.length" class="media-grid">
          <button v-for="(src, idx) in ywtFiles" :key="src" class="media-item photo-button" :aria-label="`全屏查看生活照 ${idx + 1}`" @click="openPhoto(ywtFiles, idx, '生活照')">
            <img :src="src" :alt="`生活照 ${idx + 1}`" loading="lazy" />
          </button>
        </div>
        <p v-else class="empty-tip">暂无照片，期待更新~</p>
      </article>

      <!-- 我和沙雕朋友们 -->
      <article class="card">
        <h2>我和沙雕朋友们</h2>
        <div v-if="friendsFiles.length" class="media-grid">
          <template v-for="(item, idx) in friendsFiles" :key="idx">
            <button v-if="item.type === 'image'" class="photo-button" :aria-label="`全屏查看朋友合照 ${idx + 1}`" @click="openPhoto(friendImages, friendImages.indexOf(item.src), '朋友合照')">
              <img :src="item.src" :alt="`朋友合照 ${idx + 1}`" loading="lazy" />
            </button>
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
          <button v-for="(src, idx) in musicImages" :key="src" class="media-item photo-button" :aria-label="`全屏查看文艺时刻 ${idx + 1}`" @click="openPhoto(musicImages, idx, '文艺时刻')">
            <img :src="src" :alt="`文艺时刻 ${idx + 1}`" loading="lazy" />
          </button>
        </div>

        <!-- 视频 -->
        <div v-if="musicVideos.length" class="video-grid">
          <video v-for="(src, idx) in musicVideos" :key="idx" :src="src" controls></video>
        </div>

        <!-- 音频 -->
        <div v-if="musicAudios.length" class="audio-list">
          <div v-for="(item, idx) in musicAudios" :key="idx" class="audio-item">
            <span class="audio-title">{{ item.name }}</span>
            <button class="play-btn" @click="toggleAudio(idx)">
              {{ playingIndex === idx ? '⏸ 暂停' : '▶ 播放' }}
            </button>
          </div>
        </div>

        <p v-if="!musicImages.length && !musicVideos.length && !musicAudios.length" class="empty-tip">暂无内容，期待更新~</p>
      </article>
    </section>
    <Teleport to="body">
      <dialog ref="photoDialog" class="photo-viewer" aria-label="照片全屏查看" @click.self="closePhoto" @close="restoreScroll" @keydown.left.prevent="changePhoto(-1)" @keydown.right.prevent="changePhoto(1)">
        <template v-if="activePhotos.length">
          <button class="viewer-button viewer-close" aria-label="关闭全屏查看" autofocus @click="closePhoto">×</button>
          <button v-if="activePhotos.length > 1" class="viewer-button viewer-prev" aria-label="上一张照片" @click="changePhoto(-1)">‹</button>
          <img class="viewer-image" :src="activePhotos[activeIndex]" :alt="`${activeLabel} ${activeIndex + 1}`" />
          <button v-if="activePhotos.length > 1" class="viewer-button viewer-next" aria-label="下一张照片" @click="changePhoto(1)">›</button>
          <p class="viewer-caption" aria-live="polite">{{ activeLabel }} · {{ activeIndex + 1 }} / {{ activePhotos.length }}</p>
        </template>
      </dialog>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, onMounted, onBeforeUnmount } from 'vue'

const ywtFiles = ref([])
const friendsFiles = ref([])
const musicImages = ref([])
const musicVideos = ref([])
const musicAudios = ref([])
const playingIndex = ref(-1)
let currentAudio = null

const friendImages = computed(() => friendsFiles.value.filter(item => item.type === 'image').map(item => item.src))
const photoDialog = ref(null)
const activePhotos = ref([])
const activeIndex = ref(0)
const activeLabel = ref('')
let previousOverflow = null

const openPhoto = async (photos, index, label) => {
  activePhotos.value = photos
  activeIndex.value = index
  activeLabel.value = label
  await nextTick()
  if (!photoDialog.value) return
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  photoDialog.value.showModal()
}

const restoreScroll = () => {
  if (previousOverflow !== null) {
    document.body.style.overflow = previousOverflow
    previousOverflow = null
  }
}
const closePhoto = () => photoDialog.value?.close()
const changePhoto = (step) => {
  if (activePhotos.value.length) {
    activeIndex.value = (activeIndex.value + step + activePhotos.value.length) % activePhotos.value.length
  }
}

onBeforeUnmount(() => {
  closePhoto()
  restoreScroll()
  currentAudio?.pause()
})

const toggleAudio = (idx) => {
  if (playingIndex.value === idx) {
    currentAudio.pause()
    playingIndex.value = -1
    currentAudio = null
  } else {
    if (currentAudio) {
      currentAudio.pause()
    }
    currentAudio = new Audio(musicAudios.value[idx].src)
    currentAudio.play().catch(() => {})
    playingIndex.value = idx
    currentAudio.onended = () => {
      playingIndex.value = -1
      currentAudio = null
    }
  }
}

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

.photo-tip { color: #aaa; }
.photo-button {
  display: block;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  cursor: zoom-in;
  min-width: 0;
}
.photo-button:focus-visible { outline: 2px solid #42b983; outline-offset: 4px; }
.photo-button img { display: block; }
.photo-viewer {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  height: 100dvh;
  max-width: none;
  max-height: none;
  box-sizing: border-box;
  margin: 0;
  padding: 64px 60px;
  border: 0;
  background: rgba(0, 0, 0, 0.95);
  color: white;
}
.photo-viewer[open] { display: flex; align-items: center; justify-content: center; }
.photo-viewer::backdrop { background: #000; }
.viewer-image { max-width: 100%; max-height: 100%; object-fit: contain; }
.viewer-button {
  position: absolute;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid #777;
  border-radius: 50%;
  background: #222;
  color: white;
  font-size: 30px;
  cursor: pointer;
}
.viewer-button:focus-visible { outline: 2px solid #42b983; outline-offset: 3px; }
.viewer-close { top: 16px; right: 16px; }
.viewer-prev { left: 8px; top: calc(50% - 22px); }
.viewer-next { right: 8px; top: calc(50% - 22px); }
.viewer-caption { position: absolute; bottom: 16px; left: 0; width: 100%; text-align: center; pointer-events: none; }

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

.play-btn {
  background-color: rgba(66, 185, 131, 0.15);
  color: #42b983;
  border: 1px solid #42b983;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.play-btn:hover {
  background-color: #42b983;
  color: #000;
}

@media (max-width: 600px) {
  .photo-viewer { padding: 64px 12px; }
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
