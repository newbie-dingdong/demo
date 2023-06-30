import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'
import { Notification } from '@arco-design/web-vue'
import '@/assets/tailwind.css'
const app = createApp(App)
Notification._context = app._context
app.use(router).use(pinia)

app.mount('#app')
