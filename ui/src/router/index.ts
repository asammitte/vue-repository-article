import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '@/views/articles/ArticlesView.vue'

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
      component: () => import('@/views/authors/AuthorsView.vue')
    },
    {
      path: '/authors/:id',
      name: 'authorDetails',
      // route level code-splitting
      // this generates a separate chunk (AuthorsView.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/authors/AuthorDetailsView.vue')
    }
  ]
})

export default router
