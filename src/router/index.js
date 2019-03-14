/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
// const Layout = () => import(/* webpackChunkName: "group-foo" */ '@/views/layout/Layout.vue')

Vue.use(Router)

export const routerMap = [
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
      },
      {
        path: 'form2',
        component: () => import('@/views/example/formElement'),
        name: 'form2'
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
  routes: routerMap
})
