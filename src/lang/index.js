import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import twLocale from './tw'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...twLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: Cookies.get('language') || 'tw',
  // set locale messages
  messages
})

export default i18n
