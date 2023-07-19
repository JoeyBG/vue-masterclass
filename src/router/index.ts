import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type RouteRecordRaw
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import sourceData from '../data'

const redirectToNotFound = (to: RouteLocationNormalized) => ({
  name: 'not-found',
  params: { pathMatch: to.path.substring(1).split('/') },
  query: to.query,
  hash: to.hash
})

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  },
  {
    name: 'forum',
    path: '/forum/:forumId',
    component: () => import('../views/ForumView.vue'),
    props: true
  },
  {
    name: 'thread-show',
    path: '/thread/:threadId',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ThreadShowView.vue'),
    beforeEnter: (to) => {
      const thread = sourceData.threads.find((thread) => thread.id === to.params.threadId)
      if (!thread) return redirectToNotFound(to)
    }
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
