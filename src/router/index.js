/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
export const constantRouterMap = [
  {
    component: Layout,
    path: '/test',
    name: 'index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index'),
        name: 'Test Page'
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
