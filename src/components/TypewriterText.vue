<template>
  <span class="typewriter">
    <span class="typewriter-readable">{{ text }}</span>
    <span class="typewriter-reserve" aria-hidden="true">{{ text }}</span>
    <span class="typewriter-visual" aria-hidden="true">{{ displayedText }}<span v-if="motionEnabled" class="typewriter-cursor"></span></span>
  </span>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({ text: { type: String, required: true } })
const displayedText = ref(props.text)
const motionEnabled = ref(false)
let timer
let observer

function restart() {
  clearTimeout(timer)
  motionEnabled.value = document.documentElement.dataset.motion !== 'off'
  if (!motionEnabled.value) {
    displayedText.value = props.text
    return
  }

  const characters = Array.from(props.text)
  let position = 0
  let deleting = false
  displayedText.value = ''

  function tick() {
    position += deleting ? -1 : 1
    displayedText.value = characters.slice(0, position).join('')
    let delay = deleting ? 65 : 115
    if (position === characters.length) {
      deleting = true
      delay = 2400
    } else if (position === 0) {
      deleting = false
      delay = 800
    }
    timer = setTimeout(tick, delay)
  }

  if (characters.length) timer = setTimeout(tick, 500)
}

onMounted(() => {
  restart()
  observer = new MutationObserver(restart)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] })
})

watch(() => props.text, restart)

onBeforeUnmount(() => {
  clearTimeout(timer)
  observer?.disconnect()
})
</script>

<style scoped>
.typewriter { position: relative; display: inline-block; max-width: 100%; text-align: left; }
.typewriter-reserve { visibility: hidden; }
.typewriter-visual { position: absolute; inset: 0; }
.typewriter-readable { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.typewriter-cursor { position: relative; display: inline-block; width: 0; height: 1em; vertical-align: -0.12em; }
.typewriter-cursor::after { content: ''; position: absolute; left: 3px; top: 0; width: 2px; height: 100%; background: var(--accent); animation: cursor-blink 0.85s steps(1) infinite; }
@keyframes cursor-blink { 50% { opacity: 0; } }
</style>
