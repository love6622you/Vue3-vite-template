import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/Main.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/ErrPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
