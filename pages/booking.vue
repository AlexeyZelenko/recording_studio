<template>
  <NuxtLayout name="default">
    <div>
      <section class="relative py-32 bg-dark">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-dark"></div>

        <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Book Your Session</h1>
          <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
            Schedule time in our professional studios for your next project.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="max-w-4xl mx-auto">
          <div class="glass-card p-8 rounded-xl">
            <PToast />

            <h2 class="text-2xl font-bold text-white mb-6">Session Booking Request</h2>

            <form @submit.prevent="submitBooking" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-gray mb-2">First Name*</label>
                  <PInputText id="firstName" v-model="form.firstName" class="w-full" required />
                </div>
                <div>
                  <label for="lastName" class="block text-gray mb-2">Last Name*</label>
                  <PInputText id="lastName" v-model="form.lastName" class="w-full" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-gray mb-2">Email*</label>
                  <PInputText id="email" v-model="form.email" class="w-full" type="email" required />
                </div>
                <div>
                  <label for="phone" class="block text-gray mb-2">Phone Number*</label>
                  <PInputText id="phone" v-model="form.phone" class="w-full" required />
                </div>
              </div>

              <div>
                <label for="serviceType" class="block text-gray mb-2">Service Type*</label>
                <PDropdown id="serviceType" v-model="form.serviceType" :options="serviceTypes"
                           optionLabel="name" class="w-full" required />
              </div>

              <div>
                <label for="preferredDates" class="block text-gray mb-2">Preferred Dates*</label>
                <PCalendar v-model="form.preferredDates" selection-mode="multiple"
                           class="w-full" date-format="mm/dd/yy" required />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="sessionLength" class="block text-gray mb-2">Session Length*</label>
                  <PDropdown id="sessionLength" v-model="form.sessionLength" :options="sessionLengths"
                             optionLabel="name" class="w-full" required />
                </div>
                <div>
                  <label for="budget" class="block text-gray mb-2">Budget Range (USD)</label>
                  <PDropdown id="budget" v-model="form.budget" :options="budgetRanges"
                             optionLabel="name" class="w-full" />
                </div>
              </div>

              <div>
                <label for="projectDetails" class="block text-gray mb-2">Project Details*</label>
                <PTextarea id="projectDetails" v-model="form.projectDetails"
                           rows="5" class="w-full"
                           placeholder="Tell us about your project (number of songs, instruments, genre, etc.)" required />
              </div>

              <div>
                <label for="specialRequests" class="block text-gray mb-2">Special Requests</label>
                <PTextarea id="specialRequests" v-model="form.specialRequests"
                           rows="3" class="w-full"
                           placeholder="Any special equipment or accommodations needed?" />
              </div>

              <div class="flex items-center gap-2">
                <input type="checkbox" id="terms" v-model="form.agreedToTerms" required />
                <label for="terms" class="text-gray">I agree to the <a href="#" class="text-primary hover:underline">terms and conditions</a>*</label>
              </div>

              <div class="flex justify-end">
                <PButton type="submit" label="Submit Booking Request" icon="pi pi-calendar-plus" :loading="loading" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="section bg-dark-light">
        <div class="text-center mb-16" data-animation="fade-in">
          <h2 class="heading">Frequently Asked Questions</h2>
          <p class="subheading mx-auto">Everything you need to know about booking a session with us.</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div v-for="(faq, index) in faqs" :key="index"
               class="glass-card overflow-hidden rounded-xl"
               data-animation="fade-in">
            <div class="p-6 cursor-pointer flex justify-between items-center"
                 @click="faq.isOpen = !faq.isOpen">
              <h3 class="text-white font-semibold text-lg">{{ faq.question }}</h3>
              <i :class="faq.isOpen ? 'pi pi-minus' : 'pi pi-plus'" class="text-primary"></i>
            </div>
            <div v-show="faq.isOpen" class="px-6 pb-6 pt-0 text-gray">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div> </NuxtLayout>
</template>

<script setup>
// ... (ваш script setup остается без изменений)
import { ref, reactive } from 'vue'
import { useAnimation } from '~/composables/useAnimation'
import { useFirebase } from '~/composables/useFirebase'
// ... (импорты компонентов PrimeVue)
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Toast from 'primevue/toast'; // Убедитесь, что Toast импортирован, если используете PToast

definePageMeta({
  title: 'Book a Session - Resonance Studios',
  description: 'Schedule time in our professional recording studios for your next music project.'
})

const { isLoaded } = useAnimation() // Проверьте, нужен ли useAnimation на этой странице, если нет, удалите его
const { createDocument, loading, error } = useFirebase() // Убедитесь, что useFirebase корректно работает

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: null,
  preferredDates: [],
  sessionLength: null,
  budget: null,
  projectDetails: '',
  specialRequests: '',
  agreedToTerms: false
})

const serviceTypes = [
  { name: 'Recording Session', value: 'recording' },
  { name: 'Mixing & Mastering', value: 'mixing' },
  { name: 'Music Production', value: 'production' },
  { name: 'Vocal Production', value: 'vocal' },
  { name: 'Podcast Recording', value: 'podcast' },
  { name: 'Voice-Over Session', value: 'voiceover' }
]

const sessionLengths = [
  { name: '2 Hours', value: '2hrs' },
  { name: '4 Hours (Half Day)', value: '4hrs' },
  { name: '8 Hours (Full Day)', value: '8hrs' },
  { name: 'Multiple Days', value: 'multiday' }
]

const budgetRanges = [
  { name: '$100 - $500', value: '100-500' },
  { name: '$500 - $1,000', value: '500-1000' },
  { name: '$1,000 - $2,500', value: '1000-2500' },
  { name: '$2,500 - $5,000', value: '2500-5000' },
  { name: '$5,000+', value: '5000+' }
]

const faqs = ref([
  {
    question: 'What should I bring to a recording session?',
    answer: 'For recording sessions, please bring your instruments (unless using our house instruments), any necessary accessories (picks, drumsticks, capos), lyric sheets, reference tracks, and a hard drive for backup. We provide all recording equipment.',
    isOpen: true
  },
  {
    question: 'How far in advance should I book a session?',
    answer: 'We recommend booking at least 2-3 weeks in advance for standard sessions, and 4-6 weeks for larger projects. However, we do sometimes have last-minute availability, so don\'t hesitate to contact us for urgent requests.',
    isOpen: false
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes, we require a 50% non-refundable deposit to secure your booking. The remaining balance is due on the day of the session.',
    isOpen: false
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made more than 7 days before the session will receive a 50% refund of the deposit. Cancellations within 7 days of the session will forfeit the deposit. You can reschedule with 48 hours notice without penalty, subject to availability.',
    isOpen: false
  },
  {
    question: 'How do I prepare for a mixing session?',
    answer: 'For mixing sessions, please provide organized, clearly labeled stems or a consolidated session file in a compatible format (Pro Tools, Logic, etc.). Include reference tracks and detailed notes about your vision for the mix.',
    isOpen: false
  }
])

const submitBooking = async () => {
  // Здесь можно добавить валидацию полей формы перед отправкой
  // Например, проверить, что все required поля заполнены, формат email и телефона корректны и т.д.

  if (!form.agreedToTerms) {
    useNuxtApp().$toast.add({
      severity: 'warn',
      summary: 'Необходимо согласие',
      detail: 'Пожалуйста, согласитесь с условиями и положениями.',
      life: 3000
    });
    return; // Прерываем отправку, если пользователь не согласился
  }

  // Более полная валидация всех полей required должна быть здесь
  // Пример:
  if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.serviceType || form.preferredDates.length === 0 || !form.sessionLength || !form.projectDetails) {
    useNuxtApp().$toast.add({
      severity: 'warn',
      summary: 'Неполные данные',
      detail: 'Пожалуйста, заполните все обязательные поля.',
      life: 3000
    });
    return; // Прерываем отправку, если обязательные поля не заполнены
  }


  try {
    // Format dates for Firebase
    const formattedDates = form.preferredDates.map(date => {
      if (date instanceof Date) {
        return date.toISOString().split('T')[0]
      }
      return date // Вернуть как есть, если это уже не Date (например, строка)
    })

    // Убедитесь, что useFirebase.createDocument принимает нужные аргументы и корректно работает
    // Предполагая, что createDocument сохраняет данные в коллекцию 'bookings'
    await createDocument('bookings', {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      serviceType: form.serviceType?.name || '', // Сохраняем только имя сервиса
      preferredDates: formattedDates,
      sessionLength: form.sessionLength?.name || '', // Сохраняем только имя длительности
      budget: form.budget?.name || '', // Сохраняем только имя бюджета
      projectDetails: form.projectDetails,
      specialRequests: form.specialRequests,
      status: 'pending', // Начальный статус заявки
      submittedAt: new Date() // Время отправки
    })

    // Reset form - более безопасный сброс полей reactive
    for (const key in form) {
      if (key === 'agreedToTerms') {
        form[key] = false;
      } else if (Array.isArray(form[key])) {
        form[key] = [];
      } else if (typeof form[key] === 'object' && form[key] !== null) {
        form[key] = null; // Для Dropdown, который ожидает null или объект
      } else {
        form[key] = '';
      }
    }


    // Show success toast - убедитесь, что $toast доступен (подключен плагином PrimeVue)
    useNuxtApp().$toast.add({
      severity: 'success',
      summary: 'Заявка отправлена!',
      detail: 'Мы рассмотрим ваш запрос и свяжемся с вами в ближайшее время для подтверждения сессии.',
      life: 5000
    })
  } catch (err) {
    // useFirebase должен обновлять reactive переменную error при ошибке
    console.error("Ошибка при отправке заявки:", err);
    // Show error toast - убедитесь, что $toast доступен
    useNuxtApp().$toast.add({
      severity: 'error',
      summary: 'Ошибка отправки',
      detail: error.value ? error.value.message : 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.', // Используйте ошибку из useFirebase, если доступна
      life: 5000
    });
  }
}

// Проверьте, действительно ли вам нужна анимация на этой странице
// useAnimation() // Запускает анимацию, если она есть

</script>

<style scoped>
/* Ваши стили */
</style>