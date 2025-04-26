<template>
  <section class="section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 opacity-5">
      <div v-for="i in 20" :key="i" 
           class="absolute rounded-full bg-primary"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             width: `${Math.random() * 200 + 50}px`,
             height: `${Math.random() * 200 + 50}px`,
             opacity: Math.random() * 0.5 + 0.1
           }">
      </div>
    </div>
    
    <div class="relative z-10">
      <div class="text-center mb-16" data-animation="fade-in">
        <h2 class="heading">What Our Clients Say</h2>
        <p class="subheading mx-auto">We're proud to have worked with amazing artists who trust us with their creative vision.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" 
             class="glass-card p-8 rounded-xl hover:shadow-xl transition-all duration-300"
             data-animation="scale-up">
          <!-- Quote Icon -->
          <div class="text-primary mb-4">
            <i class="pi pi-quote-left text-3xl opacity-50"></i>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray mb-6 italic">{{ testimonial.text }}</p>
          
          <!-- Client -->
          <div class="flex items-center mt-auto">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="text-white font-semibold">{{ testimonial.name }}</h4>
              <p class="text-gray text-sm">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnimation } from '~/composables/useAnimation'

const { isLoaded } = useAnimation()

const testimonials = [
  {
    text: "Working with Resonance Studios was an incredible experience. The team's attention to detail and commitment to quality helped take our album to a whole new level.",
    name: "Alex Johnson",
    title: "Lead Singer, Echosphere",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    text: "The sound quality and production value we achieved at Resonance Studios exceeded our expectations. Their engineers are world-class and the facility is state-of-the-art.",
    name: "Sarah Martinez",
    title: "Solo Artist",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    text: "From recording to mixing to mastering, the team at Resonance Studios guided us through the entire process with professionalism and creativity. Highly recommended!",
    name: "Mike Thompson",
    title: "Producer, Soundwave Records",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]
</script>