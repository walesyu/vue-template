import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import i18n from './lang'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
