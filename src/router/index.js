// Composables
import { createRouter, createWebHistory } from 'vue-router'

const defaultComponent = import('@/layouts/default/Default.vue')

const routes = [
  {
    path: '/',
    component: () => defaultComponent,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
