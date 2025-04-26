/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-light': '#8b5cf6',
        secondary: '#10b981',
        accent: '#f43f5e',
        dark: '#121212',
        'dark-light': '#1e1e1e',
        light: '#f8fafc',
        gray: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'service-bg': "url('https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
}