import { createApp } from 'vue'
import pinia from '@/stores/index'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
const app = createApp(App)
app.use(router).use(pinia).use(ArcoVue)

app.mount('#app')
