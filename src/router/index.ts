import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // 主页的路由
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    // 登录界面的路由
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    // 404not-found的路由
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
