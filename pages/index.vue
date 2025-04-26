<template>
  <NuxtLayout name="default">
    <div class="page-content">
      <HeroSection />
      
      <ServicesSection />
      
      <section class="section">
        <div class="text-center mb-16" data-animation="fade-in">
          <h2 class="heading">Вибрані Роботи</h2>
          <p class="subheading mx-auto">Послухайте деякі з наших останніх проектів та відчуйте різницю Resonance.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="index" 
               class="glass-card p-6 rounded-xl hover:border-primary/50 border border-transparent"
               :data-animation="index % 2 === 0 ? 'slide-left' : 'slide-right'">
            <div class="mb-6 rounded-lg overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full aspect-video object-cover" />
            </div>
            
            <h3 class="text-white text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray mb-6">{{ project.description }}</p>
            
            <AudioPlayer :track="project.track" />
          </div>
        </div>
        
        <div class="mt-16 text-center" data-animation="fade-in">
          <NuxtLink to="/portfolio" class="btn-primary">Переглянути Все Портфоліо</NuxtLink>
        </div>
      </section>
      
      <EquipmentSection />
      
      <TestimonialsSection />
      
      <section class="section flex items-center justify-center relative overflow-hidden" data-animation="fade-in">
        <div class="absolute inset-0 bg-service-bg bg-cover bg-center opacity-20"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-dark to-dark/80"></div>
        
        <div class="relative z-10 text-center max-w-4xl mx-auto p-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Готові Покращити Ваш Звук?</h2>
          <p class="text-xl text-gray mb-8">Забронюйте сесію в Resonance Studios та відчуйте різницю.</p>
          <NuxtLink to="/booking" class="btn-primary text-lg py-4 px-8">Забронювати Сесію Зараз</NuxtLink>
        </div>
      </section>
      
      <ContactSection />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  title: 'Головна - Resonance Studios',
  description: 'Професійні послуги запису, зведення та мастерингу в Resonance Studios. Забронюйте вашу сесію сьогодні.'
})

const featuredProjects = [
  {
    title: "Echosphere - 'Космічні Хвилі'",
    description: "Прогресивний рок-альбом з багатими текстурами та динамічним діапазоном. Записаний та зведений в нашій студії.",
    image: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    track: {
      title: "Космічні Хвилі",
      artist: "Echosphere",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }
  },
  {
    title: "Sarah Martinez - 'Мрії в Кольорі'",
    description: "Душевний поп-EP з розкішними вокальними аранжуваннями та органічним інструментуванням. Повністю спродюсований в Студії А.",
    image: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    track: {
      title: "Мрії в Кольорі",
      artist: "Sarah Martinez",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
  }
]
</script>