import { createRouter, createWebHistory } from 'vue-router'
import SellersView from '@/views/SellersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sellers',
      component: SellersView
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProductsView.vue')
    }
  ]
})

export default router
