// 2023/6/5 10:07 --fcg
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    name: 'default-layout',
    component: () => import('@/layout/default-layout.vue'),
    children: [
      {
        path: '/Home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  }
]

export default routes
