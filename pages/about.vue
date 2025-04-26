<template>
  <NuxtLayout name="default">
    <div class="page-content">
      <section class="relative py-32 bg-dark">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-dark"></div>

        <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Про Нас</h1>
          <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
            Наша історія та місія
          </p>
        </div>
      </section>

      <section class="section">
        <div class="max-w-7xl mx-auto">
          <!-- Our Story -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div data-animation="slide-left">
              <img src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   alt="Recording Studio"
                   class="rounded-xl w-full h-auto shadow-lg" />
            </div>

            <div data-animation="slide-right">
              <h2 class="text-3xl font-bold text-white mb-4">Наша Історія</h2>
              <p class="text-gray mb-6">
                Resonance Studios була заснована в 2010 році групою ентузіастів, які об'єднали свій досвід та пристрасть до музики.
                За роки роботи ми створили простір, де артисти можуть реалізувати своє творче бачення та досягти професійного звучання.
              </p>
              <p class="text-gray mb-6">
                Наша студія стала домом для багатьох успішних проектів, від незалежних артистів до відомих виконавців.
                Ми горді тим, що можемо бути частиною творчого процесу та допомагати музикантам досягати їх цілей.
              </p>
            </div>
          </div>

          <!-- Our Team -->
          <div class="text-center mb-16" data-animation="fade-in">
            <h2 class="text-3xl font-bold text-white mb-4">Наша Команда</h2>
            <p class="text-gray max-w-2xl mx-auto">
              Професіонали з багаторічним досвідом, які допоможуть втілити ваше бачення в життя
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(member, index) in team" :key="index"
                 class="glass-card p-6 rounded-xl hover:border-primary/50 border border-transparent"
                 :data-animation="index % 2 === 0 ? 'slide-left' : 'slide-right'">
              <div class="mb-6 rounded-lg overflow-hidden">
                <img :src="member.image" :alt="member.name" class="w-full aspect-square object-cover" />
              </div>
              
              <h3 class="text-white text-xl font-semibold mb-2">{{ member.name }}</h3>
              <p class="text-primary font-medium mb-4">{{ member.position }}</p>
              <p class="text-gray mb-6">{{ member.description }}</p>
              
              <div class="flex space-x-4">
                <a v-for="(social, socialIndex) in member.social" :key="socialIndex"
                   :href="social.link" target="_blank" rel="noopener noreferrer"
                   class="text-gray hover:text-primary transition-colors duration-300">
                  <i :class="social.icon" class="text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Our Values -->
          <div class="mt-24">
            <div class="text-center mb-16" data-animation="fade-in">
              <h2 class="text-3xl font-bold text-white mb-4">Наші Цінності</h2>
              <p class="text-gray max-w-2xl mx-auto">
                Принципи, які керують нашою роботою та відносинами з клієнтами
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="(value, index) in values" :key="index"
                   class="glass-card p-8 rounded-xl hover:border-primary/50 border border-transparent"
                   data-animation="fade-in">
                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 mb-6">
                  <i :class="value.icon" class="text-primary text-2xl"></i>
                </div>
                <h3 class="text-white text-xl font-semibold mb-4">{{ value.title }}</h3>
                <p class="text-gray">{{ value.description }}</p>
              </div>
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
  title: 'Про Нас - Resonance Studios',
  description: 'Дізнайтеся більше про Resonance Studios, нашу команду та цінності.'
})

const { isLoaded } = useAnimation()

const team = [
  {
    name: 'Олександр Петренко',
    position: 'Головний інженер',
    description: 'Більше 15 років досвіду в звукозаписі та зведенні. Працював з відомими українськими та міжнародними артистами.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      { icon: 'pi pi-linkedin', link: '#' },
      { icon: 'pi pi-instagram', link: '#' }
    ]
  },
  {
    name: 'Марія Коваленко',
    position: 'Продюсер',
    description: 'Талановитий продюсер з унікальним баченням. Допомагає артистам розкрити свій потенціал та створити унікальний звук.',
    image: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      { icon: 'pi pi-linkedin', link: '#' },
      { icon: 'pi pi-instagram', link: '#' }
    ]
  },
  {
    name: 'Андрій Сидоренко',
    position: 'Звукорежисер',
    description: 'Спеціалізується на живому звуку та записі акустичних інструментів. Має тонке відчуття звуку та простору.',
    image: 'https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      { icon: 'pi pi-linkedin', link: '#' },
      { icon: 'pi pi-instagram', link: '#' }
    ]
  }
]

const values = [
  {
    title: 'Якість',
    description: 'Ми прагнемо до досконалості в кожному аспекті нашої роботи, від запису до фінального мастерингу.',
    icon: 'pi pi-star'
  },
  {
    title: 'Креативність',
    description: 'Ми заохочуємо експерименти та інновації, допомагаючи артистам знайти свій унікальний звук.',
    icon: 'pi pi-palette'
  },
  {
    title: 'Професіоналізм',
    description: 'Наша команда постійно вдосконалює свої навички та слідкує за останніми тенденціями в індустрії.',
    icon: 'pi pi-briefcase'
  },
  {
    title: 'Співпраця',
    description: 'Ми працюємо в тісній співпраці з артистами, щоб досягти найкращих результатів.',
    icon: 'pi pi-users'
  },
  {
    title: 'Інновації',
    description: 'Ми постійно оновлюємо наше обладнання та технології для забезпечення найкращої якості.',
    icon: 'pi pi-bolt'
  },
  {
    title: 'Надійність',
    description: 'Ми гарантуємо дотримання дедлайнів та високу якість роботи в кожному проекті.',
    icon: 'pi pi-check-circle'
  }
]
</script> 