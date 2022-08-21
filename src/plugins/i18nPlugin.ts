import { createI18n } from 'vue-i18n'
import store from '@/store'
import { tw } from '@/lang/tw'
import { en } from '@/lang/en'

const i18n = createI18n({
  locale: store.getters['app/lang'],
  messages: {
    ch: tw,
    en: en
  }
})

export default i18n
