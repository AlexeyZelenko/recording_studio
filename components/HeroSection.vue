<template>
  <section class="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
    
    <div class="relative container mx-auto px-4 md:px-6 z-10">
      <div class="max-w-2xl" data-animation="fade-in">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Де Ваш Звук<br>
          <span class="text-primary">Оживає</span>
        </h1>
        <p class="text-lg md:text-xl text-gray mb-8">
          Професійні послуги запису, зведення та мастерингу в 
          сучасній студії. Піднесіть вашу музику разом з нами.
        </p>
<!--        <div class="flex flex-col sm:flex-row gap-4">-->
<!--          <NuxtLink to="/booking" class="btn-primary">Забронювати Сесію</NuxtLink>-->
<!--          <NuxtLink to="/portfolio" class="btn-secondary">Послухати Наші Роботи</NuxtLink>-->
<!--        </div>-->
      </div>
    </div>
    
    <!-- Floating equalizer animation -->
    <div class="hidden md:block absolute bottom-20 right-20 w-64 h-32 z-10">
      <div class="relative w-full h-full">
        <div v-for="(bar, index) in 12" :key="index" 
             class="absolute bottom-0 w-4 bg-primary opacity-75 rounded-t-md" 
             :style="{
               height: `${heights[index]}%`,
               left: `${index * 20}px`,
               animation: `equalizerBar ${durations[index]}s ease-in-out infinite alternate`
             }">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimation } from '~/composables/useAnimation'

const { isLoaded } = useAnimation()

const heights = ref([])
const durations = ref([])

onMounted(() => {
  for (let i = 0; i < 12; i++) {
    heights.value.push(Math.floor(Math.random() * 70) + 30)
    durations.value.push((Math.random() * 1) + 0.5)
  }
})
</script>

<style scoped>
@keyframes equalizerBar {
  0% {
    height: 30%;
  }
  100% {
    height: var(--end-height, 100%);
  }
}
</style>