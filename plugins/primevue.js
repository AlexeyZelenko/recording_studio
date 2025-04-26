import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Carousel from 'primevue/carousel'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  
  nuxtApp.vueApp.component('PButton', Button)
  nuxtApp.vueApp.component('PInputText', InputText)
  nuxtApp.vueApp.component('PTextarea', Textarea)
  nuxtApp.vueApp.component('PCalendar', Calendar)
  nuxtApp.vueApp.component('PDropdown', Dropdown)
  nuxtApp.vueApp.component('PDialog', Dialog)
  nuxtApp.vueApp.component('PToast', Toast)
  nuxtApp.vueApp.component('PProgressSpinner', ProgressSpinner)
  nuxtApp.vueApp.component('PCarousel', Carousel)
  nuxtApp.vueApp.component('PCard', Card)
  nuxtApp.vueApp.component('PDataTable', DataTable)
  nuxtApp.vueApp.component('PColumn', Column)
})