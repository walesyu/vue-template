import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import i18n from './lang'
import store from './store'
import messageService from 'vue-update-message'

Vue.config.productionTip = false

Vue.use(messageService)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
