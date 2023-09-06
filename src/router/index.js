import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chengxiang',
      name: 'chengxiang',
      component: () => import('../views/ChengxiangView.vue')
    },
    // {
    //   path: '/hangyechengzhen',
    //   name: 'hangyechengzhen',
    //   component: () => import('../views/HangyechengzhenView.vue')
    // },
    // {
    //   path: '/hangyeguoyou',
    //   name: 'hangyeguoyou',
    //   component: () => import('../views/HangyeguoyouView.vue')
    // },
    // {
    //   path: '/jingjichengzhen',
    //   name: 'jingjichengzhen',
    //   component: () => import('../views/JingjichengzhenView.vue')
    // },
    // {
    //   path: '/jingjixiangcun',
    //   name: 'jingjixiangcun',
    //   component: () => import('../views/JingjixiangcunView.vue')
    // },
    // {
    //   path: '/laodongli',
    //   name: 'laodongli',
    //   component: () => import('../views/LaodongliView.vue')
    // },
    // {
    //   path: '/sancichanye',
    //   name: 'sancichanye',
    //   component: () => import('../views/SancichanyeView.vue')
    // },
    // {
    //   path: '/siyingqiye',
    //   name: 'siyingqiye',
    //   component: () => import('../views/SiyingqiyeView.vue')
    // }
  ]
})

export default router
