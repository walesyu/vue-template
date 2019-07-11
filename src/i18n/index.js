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
import enElementLocale from 'element-ui/lib/locale/lang/en'
import zhElementLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementTwLocale from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const messages = {
  tw: {
    ...twLocale,
    ...elementTwLocale
  },
  cn: {
    ...cnLocale,
    ...zhElementLocale
  },
  en: {
    ...enLocale,
    ...enElementLocale
  }
}
const i18n = new VueI18n({
  locale: Cookies.get('language') || 'tw',
  messages
})
//element ui 支援i18n
locale.i18n((key, value) => i18n.t(key, value) )

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
