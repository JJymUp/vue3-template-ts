import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import router from './router'
import store from '@/store'
import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(store)
app.mount('#app')
