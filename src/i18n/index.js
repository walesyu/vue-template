import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import twLocale from './tw'
import cnLocale from './cn'
import enLocale from './en'
import en from 'vee-validate/dist/locale/en'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import zh_TW from 'vee-validate/dist/locale/zh_TW'
import VeeValidate from 'vee-validate'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...twLocale
  },
  cn: {
    ...cnLocale
  },
  en: {
    ...enLocale
  }
}
const i18n = new VueI18n({
  locale: Cookies.get('language') || 'tw',
  messages
})
// Vee Validate多語系支援
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  fieldsBagName: 'formFields',
  dictionary: {
    en: en,
    tw: zh_TW,
    cn: zh_CN
  }
})
export default i18n
