<template>
  <div>
    <NuxtLayout name="default">
      <div class="page-content">
        <section class="relative py-32 bg-dark">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-dark"></div>

          <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Обладнання</h1>
            <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
              Найсучасніше обладнання для досягнення ідеального звучання
            </p>
          </div>
        </section>

        <section class="section">
          <div class="max-w-7xl mx-auto">
            <!-- Equipment Categories -->
            <div class="grid grid-cols-1 gap-24">
              <div v-for="(category, index) in categories" :key="index" 
                   class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div :class="{ 'order-2 lg:order-1': index % 2 === 1 }" data-animation="slide-left">
                  <h2 class="text-3xl font-bold text-white mb-4">{{ category.name }}</h2>
                  <p class="text-gray mb-6">{{ category.description }}</p>

                  <div class="space-y-6">
                    <div v-for="(item, itemIndex) in category.items" :key="itemIndex"
                         class="glass-card p-6 rounded-xl hover:border-primary/50 border border-transparent">
                      <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 mr-4">
                          <i :class="item.icon" class="text-primary text-xl"></i>
                        </div>
                        <div>
                          <h3 class="text-white font-semibold text-lg mb-2">{{ item.name }}</h3>
                          <p class="text-gray">{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div :class="{ 'order-1 lg:order-2': index % 2 === 1 }" data-animation="slide-right">
                  <img :src="category.image" :alt="category.name" class="rounded-xl w-full h-auto shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

definePageMeta({
  title: 'Обладнання - Resonance Studios',
  description: 'Перегляньте наше професійне аудіо обладнання та інструменти.'
})

const { isLoaded } = useAnimation()

const categories = [
  {
    name: 'Мікрофони та Передпідсилювачі',
    description: 'Наш арсенал мікрофонів та передпідсилювачів забезпечує чітке та детальне захоплення звуку.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'Neumann U87',
        description: 'Легендарний конденсаторний мікрофон для вокалу та акустичних інструментів.',
        icon: 'pi pi-microphone'
      },
      {
        name: 'Neve 1073',
        description: 'Класичний передпідсилювач з характерним теплим звучанням.',
        icon: 'pi pi-volume-up'
      },
      {
        name: 'AKG C414',
        description: 'Універсальний конденсаторний мікрофон для різних джерел звуку.',
        icon: 'pi pi-microphone'
      }
    ]
  },
  {
    name: 'Аудіо Інтерфейси та Конвертери',
    description: 'Високоякісні конвертери та інтерфейси для точного цифрового запису.',
    image: 'https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'Apogee Symphony',
        description: 'Професійний аудіо інтерфейс з високоякісними конвертерами.',
        icon: 'pi pi-desktop'
      },
      {
        name: 'Lynx Aurora',
        description: 'Точні АЦП/ЦАП конвертери для критичного прослуховування.',
        icon: 'pi pi-desktop'
      },
      {
        name: 'Universal Audio Apollo',
        description: 'Інтерфейс з вбудованою обробкою в реальному часі.',
        icon: 'pi pi-desktop'
      }
    ]
  },
  {
    name: 'Обробка та Ефекти',
    description: 'Аналогова та цифрова обробка для формування звуку.',
    image: 'https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'SSL G-Series',
        description: 'Класичний аналоговий компресор для динамічної обробки.',
        icon: 'pi pi-sliders-h'
      },
      {
        name: 'Lexicon 480L',
        description: 'Легендарний ревербератор для просторових ефектів.',
        icon: 'pi pi-sliders-h'
      },
      {
        name: 'Eventide H8000',
        description: 'Мультиефектний процесор для креативної обробки.',
        icon: 'pi pi-sliders-h'
      }
    ]
  },
  {
    name: 'Моніторинг та Акустика',
    description: 'Точні монітори та акустична обробка для критичного прослуховування.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    items: [
      {
        name: 'Genelec 8351',
        description: 'Активні монітори з коаксіальним дизайном для точного звучання.',
        icon: 'pi pi-volume-up'
      },
      {
        name: 'ATC SCM25A',
        description: 'Професійні монітори з широким діапазоном.',
        icon: 'pi pi-volume-up'
      },
      {
        name: 'Acoustic Treatment',
        description: 'Комплексна акустична обробка приміщень.',
        icon: 'pi pi-volume-up'
      }
    ]
  }
]
</script> 