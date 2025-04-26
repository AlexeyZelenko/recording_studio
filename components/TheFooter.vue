<template>
  <footer class="bg-dark-light border-t border-white/10 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold text-white mb-4">Resonance<span class="text-primary">Studios</span></h3>
          <p class="text-gray mb-4">Професійні послуги запису, зведення та мастерингу для виконавців, які прагнуть досконалості.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray hover:text-primary transition-colors duration-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="#" class="text-gray hover:text-primary transition-colors duration-300">
              <i class="pi pi-instagram text-xl"></i>
            </a>
            <a href="#" class="text-gray hover:text-primary transition-colors duration-300">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray hover:text-primary transition-colors duration-300">
              <i class="pi pi-youtube text-xl"></i>
            </a>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Швидкі Посилання</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray hover:text-white transition-colors duration-300">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Послуги</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <NuxtLink to="/services" class="text-gray hover:text-white transition-colors duration-300">
                {{ service }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold text-lg mb-4">Контакти</h4>
          <div class="space-y-3 text-gray">
            <p class="flex items-start">
              <i class="pi pi-map-marker mt-1 mr-3 text-primary"></i>
              <span>вул. Музична 123, Звукоград, СЗ 98765</span>
            </p>
            <p class="flex items-start">
              <i class="pi pi-phone mt-1 mr-3 text-primary"></i>
              <span>(555) 123-4567</span>
            </p>
            <p class="flex items-start">
              <i class="pi pi-envelope mt-1 mr-3 text-primary"></i>
              <span>info@resonancestudios.com</span>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Bottom -->
      <div class="pt-8 border-t border-white/10 text-center text-gray text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Resonance Studios. Всі права захищені.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { name: 'Головна', path: '/' },
  { name: 'Послуги', path: '/services' },
  { name: 'Портфоліо', path: '/portfolio' },
  { name: 'Обладнання', path: '/equipment' },
  { name: 'Про Нас', path: '/about' },
  { name: 'Контакти', path: '/contact' }
]

const services = [
  'Сесії Запису',
  'Зведення та Мастеринг',
  'Вокальне Виробництво',
  'Музичне Виробництво',
  'Запис Подкастів',
  'Послуги Озвучки'
]
</script>