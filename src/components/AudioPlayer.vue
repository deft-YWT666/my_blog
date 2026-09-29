<template>
  <div class="audio-player">
    <audio ref="audio" :src="src" preload="metadata" @loadedmetadata="updateDuration" @durationchange="updateDuration" @timeupdate="updateTime" @play="onPlay" @playing="loading = false" @waiting="loading = playing" @pause="onPause" @ended="onPause" @error="onError" />
    <div class="track-header">
      <span class="audio-title">{{ name }}</span>
      <button class="play-btn" :aria-label="`${playing ? '暂停' : '播放'}${name}`" @click="toggle">
        {{ playing ? '⏸ 暂停' : '▶ 播放' }}
      </button>
    </div>
    <div class="track-progress">
      <span class="track-time">{{ formatTime(currentTime) }}</span>
      <input class="seek-bar" type="range" min="0" :max="duration || 0" step="0.1" :value="currentTime" :disabled="!duration" :aria-label="`${name}播放进度`" :aria-valuetext="`${formatTime(currentTime)} / ${formatTime(duration)}`" @input="seek" />
      <span class="track-time">{{ formatTime(duration) }}</span>
    </div>
    <p v-if="loading || error" class="track-status" role="status">{{ error || '音频加载中，请稍候…' }}</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'

defineProps({ src: { type: String, required: true }, name: { type: String, required: true } })
const emit = defineEmits(['play'])
const audio = ref(null)
const playing = ref(false)
const loading = ref(false)
const error = ref('')
const duration = ref(0)
const currentTime = ref(0)

const formatTime = (seconds) => {
  const value = Math.max(0, Math.floor(seconds || 0))
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`
}
const updateDuration = () => {
  duration.value = Number.isFinite(audio.value.duration) ? audio.value.duration : 0
}
const updateTime = () => { currentTime.value = audio.value.currentTime }
const onPlay = () => {
  playing.value = true
  loading.value = audio.value.readyState < 3
  emit('play', audio.value)
}
const onPause = () => { playing.value = false; loading.value = false }
const onError = () => {
  onPause()
  error.value = '音频加载失败，请点击播放重试。'
}
const toggle = async () => {
  if (!audio.value.paused) {
    audio.value.pause()
    return
  }
  if (error.value) audio.value.load()
  error.value = ''
  try {
    await audio.value.play()
  } catch (err) {
    if (err.name !== 'AbortError') onError()
  }
}
const seek = (event) => {
  if (!duration.value) return
  audio.value.currentTime = Math.min(duration.value, Math.max(0, Number(event.target.value)))
  updateTime()
}
onBeforeUnmount(() => audio.value?.pause())
</script>

<style scoped>
.audio-player { padding: 18px 20px; border: 1px solid #303632; border-radius: 12px; background: #141815; min-width: 0; }
.track-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.audio-title { color: #eee; font-size: 0.95rem; line-height: 1.5; overflow-wrap: anywhere; }
.play-btn { flex-shrink: 0; padding: 8px 16px; min-height: 40px; border: 1px solid #446653; border-radius: 8px; background: #203329; color: #a9e5c6; font-size: 0.85rem; cursor: pointer; }
.play-btn:hover { background: #2d4939; }
.play-btn:focus-visible, .seek-bar:focus-visible { outline: 2px solid #92dfb9; outline-offset: 4px; }
.track-progress { display: flex; align-items: center; gap: 12px; margin-top: 16px; }
.track-time { color: #aab4ad; font-size: 0.8rem; font-variant-numeric: tabular-nums; min-width: 3ch; }
.seek-bar { flex: 1; width: 100%; min-width: 0; height: 24px; margin: 0; accent-color: #70c99e; cursor: pointer; }
.seek-bar:disabled { opacity: 0.4; cursor: wait; }
.track-status { margin: 10px 0 0; color: #b7c0bb; font-size: 0.8rem; }
@media (max-width: 600px) {
  .audio-player { padding: 14px; }
  .track-header { gap: 10px; }
  .play-btn { padding: 8px 12px; }
  .track-progress { gap: 8px; }
}
</style>
