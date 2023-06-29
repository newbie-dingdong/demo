import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import routes from '@/router/routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
