<template>
  <NuxtLayout name="default">
    <div class="page-content">
      <section class="relative py-32 bg-dark">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-dark"></div>

        <div class="relative container mx-auto px-4 md:px-6 z-10 text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4" data-animation="fade-in">Контакти</h1>
          <p class="text-xl text-gray max-w-3xl mx-auto" data-animation="fade-in">
            Зв'яжіться з нами для обговорення вашого проекту
          </p>
        </div>
      </section>

      <section class="section">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold text-white mb-6">Надішліть нам повідомлення</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-gray mb-2">Ім'я*</label>
                  <PInputText id="firstName" v-model="form.firstName" class="w-full" required />
                </div>
                <div>
                  <label for="lastName" class="block text-gray mb-2">Прізвище*</label>
                  <PInputText id="lastName" v-model="form.lastName" class="w-full" required />
                </div>
              </div>

              <div>
                <label for="email" class="block text-gray mb-2">Email*</label>
                <PInputText id="email" v-model="form.email" class="w-full" type="email" required />
              </div>

              <div>
                <label for="subject" class="block text-gray mb-2">Тема*</label>
                <PInputText id="subject" v-model="form.subject" class="w-full" required />
              </div>

              <div>
                <label for="message" class="block text-gray mb-2">Повідомлення*</label>
                <PTextarea id="message" v-model="form.message" rows="5" class="w-full" required />
              </div>

              <div class="flex justify-end">
                <PButton type="submit" label="Надіслати" icon="pi pi-send" :loading="loading" />
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="glass-card p-8 rounded-xl">
              <h2 class="text-2xl font-bold text-white mb-6">Контактна інформація</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="pi pi-map-marker text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <h3 class="text-white font-semibold">Адреса</h3>
                    <p class="text-gray">вул. Студійна, 1<br>Київ, Україна</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="pi pi-phone text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <h3 class="text-white font-semibold">Телефон</h3>
                    <p class="text-gray">+380 44 123 4567</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="pi pi-envelope text-primary text-xl mr-4 mt-1"></i>
                  <div>
                    <h3 class="text-white font-semibold">Email</h3>
                    <p class="text-gray">info@resonancestudios.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="glass-card p-8 rounded-xl">
              <h2 class="text-2xl font-bold text-white mb-6">Графік роботи</h2>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray">Понеділок - П'ятниця</span>
                  <span class="text-white">10:00 - 22:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray">Субота</span>
                  <span class="text-white">12:00 - 20:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray">Неділя</span>
                  <span class="text-white">За попереднім записом</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAnimation } from '~/composables/useAnimation'
import { useFirebase } from '~/composables/useFirebase'

definePageMeta({
  title: 'Контакти - Resonance Studios',
  description: 'Зв\'яжіться з Resonance Studios для обговорення вашого музичного проекту.'
})

const { isLoaded } = useAnimation()
const { createDocument, loading, error } = useFirebase()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  try {
    await createDocument('contacts', {
      ...form,
      submittedAt: new Date()
    })

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })

    useNuxtApp().$toast.add({
      severity: 'success',
      summary: 'Повідомлення надіслано!',
      detail: 'Ми зв\'яжемося з вами найближчим часом.',
      life: 5000
    })
  } catch (err) {
    console.error("Помилка при відправці повідомлення:", err)
    useNuxtApp().$toast.add({
      severity: 'error',
      summary: 'Помилка відправки',
      detail: error.value ? error.value.message : 'Сталася помилка при відправці повідомлення. Будь ласка, спробуйте ще раз.',
      life: 5000
    })
  }
}
</script> 