import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '@/views/ArticlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/authors',
      name: 'authors',
      // route level code-splitting
      // this generates a separate chunk (AuthorsView.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AuthorsView.vue')
    }
  ]
})

export default router
