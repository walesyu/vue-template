import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import i18n from './i18n'
import store from './store'
import messageService from 'vue-update-message'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'

Vue.config.productionTip = false

Vue.use(messageService)
Vue.use(VuesticPlugin)

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
