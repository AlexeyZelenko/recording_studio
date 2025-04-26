<template>
  <div class="audio-player glass-card p-4 rounded-xl w-full">
    <div class="flex items-center gap-4">
      <!-- Play/Pause Button -->
      <button @click="togglePlay" class="w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-primary-light transition-colors duration-300">
        <i :class="isPlaying ? 'pi pi-pause' : 'pi pi-play'" class="text-white text-lg"></i>
      </button>
      
      <div class="flex-1">
        <!-- Title -->
        <div class="flex justify-between items-center mb-2">
          <div>
            <h4 class="text-white font-medium">{{ track.title }}</h4>
            <p class="text-gray text-sm">{{ track.artist }}</p>
          </div>
          <div class="text-gray text-sm">
            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="h-2 bg-dark rounded-full overflow-hidden cursor-pointer"
             @click="seek">
          <div class="h-full bg-primary transition-all duration-100" 
               :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
    </div>
    
    <!-- Audio Element -->
    <audio ref="audioRef" :src="track.src" @timeupdate="onTimeUpdate" @loadedmetadata="onLoadedMetadata"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  track: {
    type: Object,
    required: true
  }
})

const audioRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const progress = computed(() => {
  return duration.value ? (currentTime.value / duration.value) * 100 : 0
})

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  
  isPlaying.value = !isPlaying.value
}

const onTimeUpdate = () => {
  if (!audioRef.value) return
  currentTime.value = audioRef.value.currentTime
}

const onLoadedMetadata = () => {
  if (!audioRef.value) return
  duration.value = audioRef.value.duration
}

const seek = (event) => {
  if (!audioRef.value) return
  
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  audioRef.value.currentTime = percent * duration.value
}

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00'
  
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Clean up
onBeforeUnmount(() => {
  if (audioRef.value) {
    audioRef.value.pause()
  }
})
</script>