<template>
  <div class="section bg-dark-light">
    <div class="text-center mb-16" data-animation="fade-in">
      <h2 class="heading">Наші Послуги</h2>
      <p class="subheading mx-auto">Ми пропонуємо повний спектр професійних аудіо послуг для втілення вашого творчого бачення в життя.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(service, index) in services" :key="index"
           class="card p-8 flex flex-col items-center text-center hover:border-primary/50 border border-transparent"
           :data-animation="'slide-' + (index % 2 === 0 ? 'left' : 'right')">
        <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
          <i :class="service.icon" class="text-primary text-2xl"></i>
        </div>
        <h3 class="text-white text-xl font-semibold mb-4">{{ service.title }}</h3>
        <p class="text-gray mb-6">{{ service.description }}</p>
        <NuxtLink :to="service.link" class="text-primary hover:text-primary-light font-medium transition-colors duration-300 mt-auto">
          Дізнатися Більше <i class="pi pi-arrow-right ml-1"></i>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-16 text-center" data-animation="fade-in">
      <NuxtLink to="/services" class="btn-primary">Переглянути Всі Послуги</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

const { isLoaded } = useAnimation()

const services = [
  {
    title: 'Сесії Запису',
    description: 'Професійний аудіозапис для гуртів, сольних виконавців та ансамблів у наших сучасних студіях звукозапису.',
    icon: 'pi pi-volume-up',
    link: '/services#recording'
  },
  {
    title: 'Зведення та Мастеринг',
    description: 'Підніміть ваші записи на новий рівень з нашими експертними послугами зведення та мастерингу для професійного, радіо-готового звучання.',
    icon: 'pi pi-sliders-h',
    link: '/services#mixing'
  },
  {
    title: 'Музичне Виробництво',
    description: 'Повний цикл музичного виробництва від концепції до фінального продукту, включаючи аранжування, інструментування та креативне керівництво.',
    icon: 'pi pi-cog',
    link: '/services#production'
  },
  {
    title: 'Вокальне Виробництво',
    description: 'Спеціалізований запис вокалу, редагування та продакшн для досягнення ідеального вокального виконання у вашому проекті.',
    icon: 'pi pi-microphone',
    link: '/services#vocal'
  },
  {
    title: 'Виробництво Подкастів',
    description: 'Повний комплекс послуг запису, редагування та виробництва подкастів з професійним обладнанням та акустичною обробкою.',
    icon: 'pi pi-cog',
    link: '/services#podcast'
  },
  {
    title: 'Озвучка',
    description: 'Високоякісний запис озвучки для реклами, анімації, аудіокниг та корпоративних відео в контрольованому середовищі.',
    icon: 'pi pi-comments',
    link: '/services#voiceover'
  }
]
</script>