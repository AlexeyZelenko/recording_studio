<template>
  <nav class="fixed w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-bold text-white">Resonance<span class="text-primary">Studios</span></span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="text-gray hover:text-white transition-colors duration-300">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/booking" class="btn-primary">Забронювати</NuxtLink>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-dark-light border-b border-white/10">
        <div class="px-4 py-3 space-y-3">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="block text-gray hover:text-white py-2 transition-colors duration-300"
            @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/booking" class="block btn-primary text-center" @click="isMenuOpen = false">
            Забронювати
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Головна', path: '/' },
  { name: 'Послуги', path: '/services' },
  { name: 'Портфоліо', path: '/portfolio' },
  { name: 'Обладнання', path: '/equipment' },
  { name: 'Про Нас', path: '/about' },
  { name: 'Контакти', path: '/contact' }
]
</script>