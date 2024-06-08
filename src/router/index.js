import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component: () =>import('@/views/HomeView.vue'),
    name: "home"
  },
  { 
    path: '/test',
    component: () =>import('@/views/TestView.vue'),
    name: "test"
  },
  { 
    path: '/eth',
    component: () =>import('@/views/EthView.vue'),
    name: "eth"
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
