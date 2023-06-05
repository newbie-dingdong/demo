import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import route from '@/router/router'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
