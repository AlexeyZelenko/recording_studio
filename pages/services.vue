<template>
  <div>
    <NuxtLayout name="default">
      <div class="page-content">
        <div class="services-page">
          <section class="relative py-32 bg-service-bg bg-cover bg-center">
            <div class="absolute inset-0 bg-gradient-to-r from-dark to-dark/80"></div>

            <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
              <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Наші Послуги</h1>
              <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
                Комплексні професійні аудіопослуги, щоб втілити ваше творче бачення в життя.
              </p>
            </div>
          </section>

          <section class="section">
            <div class="grid grid-cols-1 gap-24">
              <div id="recording" class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-animation="slide-left">
                  <img src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                       alt="Recording Studio"
                       class="rounded-xl w-full h-auto shadow-lg" />
                </div>

                <div data-animation="slide-right">
                  <h2 class="text-3xl font-bold text-white mb-4">Сесії Запису</h2>
                  <p class="text-gray mb-6">
                    Наші послуги запису надають артистам доступ до найсучаснішого обладнання та акустично оброблених приміщень,
                    розроблених для захоплення ідеального звуку. Незалежно від того, чи записуєте ви повний гурт, оркестр або сольний проєкт,
                    наші досвідчені інженери допоможуть вам досягти найкращих можливих результатів.
                  </p>

                  <ul class="space-y-3 mb-8">
                    <li v-for="(feature, index) in recordingFeatures" :key="index" class="flex items-start">
                      <i class="pi pi-check text-secondary mt-1 mr-3"></i>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>

                  <h3 class="text-xl font-semibold text-white mb-3">Ціни</h3>
                  <div class="space-y-4 mb-6">
                    <div v-for="(option, index) in recordingPricing" :key="index"
                         class="glass-card p-4 rounded-lg border border-white/10">
                      <div class="flex justify-between items-center">
                        <h4 class="text-white font-medium">{{ option.name }}</h4>
                        <span class="text-primary font-semibold">${{ option.price }}</span>
                      </div>
                      <p class="text-gray text-sm mt-1">{{ option.description }}</p>
                    </div>
                  </div>

                  <NuxtLink to="/booking" class="btn-primary">Забронювати сесію запису</NuxtLink>
                </div>
              </div>

              <div id="mixing" class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1" data-animation="slide-left">
                  <h2 class="text-3xl font-bold text-white mb-4">Зведення та Мастеринг</h2>
                  <p class="text-gray mb-6">
                    Наші послуги зведення та мастерингу забезпечують фінальне полірування, яке перетворює чудові записи на
                    професійні треки, готові до радіо. Наші інженери мають багаторічний досвід та скрупульозну увагу до деталей у кожному проєкті,
                    гарантуючи, що ваша музика звучатиме якнайкраще.
                  </p>

                  <ul class="space-y-3 mb-8">
                    <li v-for="(feature, index) in mixingFeatures" :key="index" class="flex items-start">
                      <i class="pi pi-check text-secondary mt-1 mr-3"></i>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>

                  <h3 class="text-xl font-semibold text-white mb-3">Ціни</h3>
                  <div class="space-y-4 mb-6">
                    <div v-for="(option, index) in mixingPricing" :key="index"
                         class="glass-card p-4 rounded-lg border border-white/10">
                      <div class="flex justify-between items-center">
                        <h4 class="text-white font-medium">{{ option.name }}</h4>
                        <span class="text-primary font-semibold">${{ option.price }}</span>
                      </div>
                      <p class="text-gray text-sm mt-1">{{ option.description }}</p>
                    </div>
                  </div>

                  <NuxtLink to="/booking" class="btn-primary">Забронювати послугу зведення</NuxtLink>
                </div>

                <div class="order-1 lg:order-2" data-animation="slide-right">
                  <img src="https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                       alt="Mixing Console"
                       class="rounded-xl w-full h-auto shadow-lg" />
                </div>
              </div>

              <div id="production" class="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-animation="slide-left">
                  <img src="https://images.pexels.com/photos/4988131/pexels-photo-4988131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                       alt="Music Production"
                       class="rounded-xl w-full h-auto shadow-lg" />
                </div>

                <div data-animation="slide-right">
                  <h2 class="text-3xl font-bold text-white mb-4">Музичне Продюсування</h2>
                  <p class="text-gray mb-6">
                    Наше комплексне музичне продюсування супроводжує ваш проєкт від концепції до завершення. Незалежно від того,
                    чи потрібне вам аранжування, інструментарій або креативне керівництво, наші продюсери допоможуть втілити ваше бачення в життя.
                  </p>

                  <NuxtLink to="/booking" class="btn-primary">Дізнатись більше</NuxtLink>
                </div>
              </div>

              <div class="text-center" data-animation="fade-in">
                <h2 class="text-3xl font-bold text-white mb-4">Готові розпочати?</h2>
                <p class="text-gray mb-8 max-w-2xl mx-auto">
                  Зв'яжіться з нами, щоб обговорити потреби вашого проєкту та те, як ми можемо допомогти втілити ваше творче бачення в життя.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <NuxtLink to="/booking" class="btn-primary">Забронювати сесію</NuxtLink>
                  <NuxtLink to="/contact" class="btn-secondary">Зв'язатись з нами</NuxtLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

definePageMeta({
  title: 'Послуги - Resonance Studios',
  description: 'Професійні послуги запису, зведення, мастерингу та продюсування в Resonance Studios.'
})

const { isLoaded } = useAnimation()

const recordingFeatures = [
  'Найсучасніше обладнання для запису',
  'Декілька акустично оброблених студійних приміщень',
  'Жива кімната з ізоляційними кабінами',
  'Професійні інженери з багаторічним досвідом',
  'Преміальні мікрофони та передпідсилювачі',
  'Комфортна лаунж-зона для артистів та зручності'
]

const recordingPricing = [
  {
    name: 'Базова сесія',
    price: '75/година',
    description: 'До 8 треків, включає інженера та базове налаштування.'
  },
  {
    name: 'Стандартна сесія',
    price: '125/година',
    description: 'До 24 треків, включає інженера та повний доступ до студії.'
  },
  {
    name: 'Преміум пакет',
    price: '950/день',
    description: 'Повний день (10 годин) з необмеженою кількістю треків, 2 інженерами та усіма зручностями.'
  }
]

const mixingFeatures = [
  'Гібридний підхід до зведення (аналоговий та цифровий)',
  'Плагіни та обробка за галузевими стандартами',
  'Вінтажне та сучасне зовнішнє обладнання',
  'Включено до 3 раундів ревізій',
  'Опції доставки стемів (окремих доріжок)',
  'Професійні послуги мастерингу'
]

const mixingPricing = [
  {
    name: 'Зведення одного треку',
    price: '150',
    description: 'Професійне зведення однієї пісні з можливістю до 3 ревізій.'
  },
  {
    name: 'Пакет для мініальбому (EP)',
    price: '550',
    description: '5 пісень з послідовним звучанням та необмеженою кількістю ревізій.'
  },
  {
    name: 'Мастеринг',
    price: '75/трек',
    description: 'Професійний мастеринг з детальним аудіоаналізом.'
  }
]
</script>

<style scoped>
.services-page {
  min-height: 100vh;
}
</style>