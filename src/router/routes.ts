// 2023/6/5 10:07 --fcg
import { RouteRaw } from '@/components/Menu/types'
import defaultLayout from '@/layout/default-layout.vue'

const routes: RouteRaw[] = [
  {
    path: '/',
    redirect: '/home',
    hideInMenu: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录' },
    hideInMenu: true
  },
  {
    path: '/home',
    component: defaultLayout,
    meta: { title: '首页' },
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/List/index.vue'),
        meta: { title: '列表' }
      }
    ]
  },
  {
    path: '/',
    component: defaultLayout,
    hideInMenu: true,
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/NotFound/index.vue'),
        meta: { title: '404' }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hideInMenu: true
  }
]

export default routes
