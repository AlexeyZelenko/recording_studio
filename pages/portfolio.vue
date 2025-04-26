<template>
  <NuxtLayout name="default">
    <div class="page-content">
      <section class="relative py-32 bg-dark">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-dark"></div>

        <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Портфоліо</h1>
          <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
            Останні проекти, які ми створили разом з нашими клієнтами
          </p>
        </div>
      </section>

      <section class="section">
        <div class="max-w-7xl mx-auto">
          <!-- Portfolio Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in projects" :key="index" 
                 class="glass-card p-6 rounded-xl hover:border-primary/50 border border-transparent"
                 :data-animation="index % 2 === 0 ? 'slide-left' : 'slide-right'">
              <div class="mb-6 rounded-lg overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full aspect-video object-cover" />
              </div>
              
              <h3 class="text-white text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray mb-4">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex"
                      class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {{ tag }}
                </span>
              </div>
              
              <AudioPlayer :track="project.track" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

definePageMeta({
  title: 'Портфоліо - Resonance Studios',
  description: 'Перегляньте наші останні проекти та послухайте результати нашої роботи.'
})

const { isLoaded } = useAnimation()

const projects = [
  {
    title: "Echosphere - 'Космічні Хвилі'",
    description: "Прогресивний рок-альбом з багатими текстурами та динамічним діапазоном. Записаний та зведений в нашій студії.",
    image: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Рок', 'Прогресив', 'Альбом'],
    track: {
      title: "Космічні Хвилі",
      artist: "Echosphere",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }
  },
  {
    title: "Sarah Martinez - 'Мрії в Кольорі'",
    description: "Душевний поп-EP з розкішними вокальними аранжуваннями та органічним інструментуванням.",
    image: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Поп', 'EP', 'Вокал'],
    track: {
      title: "Мрії в Кольорі",
      artist: "Sarah Martinez",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
  },
  {
    title: "Urban Beats - 'Міський Ритм'",
    description: "Хіп-хоп альбом з потужними бітами та чітким звучанням. Повністю спродюсований в нашій студії.",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Хіп-хоп', 'Біти', 'Альбом'],
    track: {
      title: "Міський Ритм",
      artist: "Urban Beats",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
  },
  {
    title: "Classical Ensemble - 'Симфонія Сучасності'",
    description: "Сучасна класична композиція, що поєднує традиційні інструменти з електронними елементами.",
    image: "https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Класика', 'Сучасна', 'Симфонія'],
    track: {
      title: "Симфонія Сучасності",
      artist: "Classical Ensemble",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }
  },
  {
    title: "Electronic Dreams - 'Цифровий Світ'",
    description: "Електронний альбом з глибокими басами та атмосферними звуками. Мастеринг виконаний в нашій студії.",
    image: "https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Електроніка', 'Альбом', 'Мастеринг'],
    track: {
      title: "Цифровий Світ",
      artist: "Electronic Dreams",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }
  },
  {
    title: "Jazz Collective - 'Імпровізація'",
    description: "Живий джазовий запис з нашої студії, що захоплює спонтанність та енергію виступу.",
    image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ['Джаз', 'Живий запис', 'Імпровізація'],
    track: {
      title: "Імпровізація",
      artist: "Jazz Collective",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    }
  }
]
</script> 