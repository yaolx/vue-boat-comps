import Home from '@/views/home/index.vue'
import Error from '@/views/error/404.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routesConfig = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: Error
  }
]

const routerHistory = createWebHashHistory()

const routers = createRouter({
  history: routerHistory,
  routes: routesConfig
})

export default routers
