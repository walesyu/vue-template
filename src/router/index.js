/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
export const constantRouterMap = [
  {
    component: Layout,
    path: '/',
    redirect: 'index',
    name: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Index'
      },
      {
        path: 'form',
        component: () => import('@/views/example/form'),
        name: 'form'
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
