<template>
  <section class="section">
    <div class="text-center mb-16" data-animation="fade-in">
      <h2 class="heading">Преміальне Обладнання</h2>
      <p class="subheading mx-auto">Наша студія оснащена найкращим аудіо обладнанням для досягнення ідеального звучання вашого проекту.</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Equipment Carousel -->
      <div data-animation="slide-left">
        <PCarousel 
          :value="equipment" 
          :numVisible="1" 
          :numScroll="1" 
          :circular="true"
          :autoplayInterval="5000"
        >
          <template #item="slotProps">
            <div class="p-4">
              <div class="relative overflow-hidden rounded-xl aspect-video">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" 
                     class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-white text-xl font-semibold">{{ slotProps.data.name }}</h3>
                <p class="text-gray">{{ slotProps.data.category }}</p>
              </div>
            </div>
          </template>
        </PCarousel>
      </div>
      
      <!-- Equipment Categories -->
      <div data-animation="slide-right">
        <div class="space-y-6">
          <div v-for="(category, index) in categories" :key="index" 
               class="glass-card p-6 hover:border-primary/50 border border-transparent transition-all duration-300">
            <h3 class="text-white text-xl font-semibold flex items-center">
              <span class="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 mr-3">
                <i :class="category.icon" class="text-primary"></i>
              </span>
              {{ category.name }}
            </h3>
            <ul class="mt-4 space-y-2 text-gray">
              <li v-for="(item, i) in category.items" :key="i" class="flex items-center">
                <i class="pi pi-check text-secondary mr-2"></i>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 text-center">
          <NuxtLink to="/equipment" class="btn-primary">Переглянути Все Обладнання</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

const { isLoaded } = useAnimation()

const equipment = [
  {
    name: 'Мікрофон Neumann U87',
    category: 'Мікрофони',
    image: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Консоль SSL AWS 948',
    category: 'Мікшерні Консолі',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Рояль Yamaha C7',
    category: 'Інструменти',
    image: 'https://images.pexels.com/photos/534169/pexels-photo-534169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Інтерфейс Universal Audio Apollo',
    category: 'Аудіо Інтерфейси',
    image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

const categories = [
  {
    name: 'Мікрофони',
    icon: 'pi pi-microphone',
    items: [
      'Neumann U87, U47, TLM 103',
      'AKG C414, C12 VR',
      'Shure SM7B, SM57, SM58',
      'Royer R-121, R-122'
    ]
  },
  {
    name: 'Зовнішнє Обладнання',
    icon: 'pi pi-server',
    items: [
      'Universal Audio 1176, LA-2A',
      'Empirical Labs Distressor',
      'API 550B EQ, 512C Preamp',
      'Tube-Tech CL1B Compressor'
    ]
  },
  {
    name: 'Інструменти',
    icon: 'pi pi-music',
    items: [
      'Рояль Yamaha C7',
      'Гітари Fender, Gibson та PRS',
      'Різноманітні Вінтажні Барабани',
      'Клавішні Nord Stage 3'
    ]
  }
]
</script>