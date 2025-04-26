<template>
  <section class="section bg-dark-light relative">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
    
    <div class="relative z-10">
      <div class="text-center mb-16" data-animation="fade-in">
        <h2 class="heading">Зв'яжіться з Нами</h2>
        <p class="subheading mx-auto">Зв'яжіться з нами, щоб запланувати тур, задати питання або забронювати сесію.</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="glass-card p-8 rounded-xl" data-animation="slide-left">
          <h3 class="text-white text-2xl font-semibold mb-6">Надіслати Повідомлення</h3>
          
          <PToast />
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-gray mb-2">Ім'я</label>
                <span class="p-input-icon-left w-full">
                  <i class="pi pi-user"></i>
                  <PInputText id="name" v-model="form.name" class="w-full" placeholder="Ваше ім'я" />
                </span>
              </div>
              <div>
                <label for="email" class="block text-gray mb-2">Email</label>
                <span class="p-input-icon-left w-full">
                  <i class="pi pi-envelope"></i>
                  <PInputText id="email" v-model="form.email" class="w-full" placeholder="Ваш email" type="email" />
                </span>
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-gray mb-2">Тема</label>
              <PDropdown id="subject" v-model="form.subject" :options="subjectOptions" optionLabel="name" 
                         placeholder="Оберіть тему" class="w-full" />
            </div>
            
            <div>
              <label for="message" class="block text-gray mb-2">Повідомлення</label>
              <PTextarea id="message" v-model="form.message" rows="5" class="w-full" placeholder="Ваше повідомлення" />
            </div>
            
            <div class="flex justify-end">
              <PButton type="submit" label="Надіслати Повідомлення" icon="pi pi-send" :loading="loading" />
            </div>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div data-animation="slide-right">
          <div class="glass-card p-8 rounded-xl mb-8">
            <h3 class="text-white text-2xl font-semibold mb-6">Контактна Інформація</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full mr-4 mt-1">
                  <i class="pi pi-map-marker text-primary"></i>
                </div>
                <div>
                  <h4 class="text-white font-medium mb-1">Адреса</h4>
                  <p class="text-gray">вул. Музична 123, Звукоград, СЗ 98765</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full mr-4 mt-1">
                  <i class="pi pi-phone text-primary"></i>
                </div>
                <div>
                  <h4 class="text-white font-medium mb-1">Телефон</h4>
                  <p class="text-gray">(555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full mr-4 mt-1">
                  <i class="pi pi-envelope text-primary"></i>
                </div>
                <div>
                  <h4 class="text-white font-medium mb-1">Email</h4>
                  <p class="text-gray">info@resonancestudios.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full mr-4 mt-1">
                  <i class="pi pi-clock text-primary"></i>
                </div>
                <div>
                  <h4 class="text-white font-medium mb-1">Години Роботи</h4>
                  <p class="text-gray">Понеділок - П'ятниця: 10:00 - 22:00</p>
                  <p class="text-gray">Субота: 12:00 - 20:00</p>
                  <p class="text-gray">Неділя: За домовленістю</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="glass-card p-8 rounded-xl">
            <h3 class="text-white text-xl font-semibold mb-4">Слідкуйте за Нами</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                <i class="pi pi-facebook text-primary"></i>
              </a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                <i class="pi pi-instagram text-primary"></i>
              </a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                <i class="pi pi-twitter text-primary"></i>
              </a>
              <a href="#" class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                <i class="pi pi-youtube text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimation } from '~/composables/useAnimation'
import { useFirebase } from '~/composables/useFirebase'

const { isLoaded } = useAnimation()
const { createDocument, loading, error } = useFirebase()
const toast = ref(null)

const form = ref({
  name: '',
  email: '',
  subject: null,
  message: ''
})

const subjectOptions = [
  { name: 'Загальне Питання', value: 'general' },
  { name: 'Інформація про Бронювання', value: 'booking' },
  { name: 'Тур по Студії', value: 'tour' },
  { name: 'Ціни', value: 'pricing' },
  { name: 'Технічні Питання', value: 'technical' }
]

const submitForm = async () => {
  try {
    await createDocument('contacts', {
      name: form.name,
      email: form.email,
      subject: form.subject?.name || 'Загальне Питання',
      message: form.message,
      status: 'new'
    })
    
    form.value = {
      name: '',
      email: '',
      subject: null,
      message: ''
    }
    
    useNuxtApp().$toast.add({
      severity: 'success',
      summary: 'Повідомлення Надіслано',
      detail: 'Ми зв\'яжемося з вами найближчим часом!',
      life: 3000
    })
  } catch (err) {
    useNuxtApp().$toast.add({
      severity: 'error',
      summary: 'Помилка',
      detail: 'Виникла проблема при надсиланні повідомлення. Будь ласка, спробуйте ще раз.',
      life: 3000
    })
  }
}
</script>