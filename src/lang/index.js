import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import twLocale from './tw'
import enLocale from './en'
import en from 'vee-validate/dist/locale/en'
import zh_TW from 'vee-validate/dist/locale/zh_TW'
import VeeValidate from 'vee-validate'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...twLocale
  },
  en: {
    ...enLocale
  }
}
const i18n = new VueI18n({
  locale: Cookies.get('language') || 'tw',
  messages
})

Vue.use(VeeValidate, {
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
    en: en,
    tw: zh_TW
  }
})
export default i18n
