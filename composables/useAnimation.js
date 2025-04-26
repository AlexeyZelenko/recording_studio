import { ref, onMounted } from 'vue'

export const useAnimation = () => {
  const isLoaded = ref(false)
  
  onMounted(() => {
    if (process.client) {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      
      // Fade in elements with data-animation="fade-in"
      $gsap.utils.toArray('[data-animation="fade-in"]').forEach(element => {
        $gsap.fromTo(element, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            } 
          }
        )
      })
      
      // Slide in elements from left with data-animation="slide-left"
      $gsap.utils.toArray('[data-animation="slide-left"]').forEach(element => {
        $gsap.fromTo(element, 
          { opacity: 0, x: -100 }, 
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            } 
          }
        )
      })
      
      // Slide in elements from right with data-animation="slide-right"
      $gsap.utils.toArray('[data-animation="slide-right"]').forEach(element => {
        $gsap.fromTo(element, 
          { opacity: 0, x: 100 }, 
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            } 
          }
        )
      })
      
      // Scale up elements with data-animation="scale-up"
      $gsap.utils.toArray('[data-animation="scale-up"]').forEach(element => {
        $gsap.fromTo(element, 
          { opacity: 0, scale: 0.8 }, 
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            } 
          }
        )
      })
      
      isLoaded.value = true
    }
  })
  
  return {
    isLoaded
  }
}