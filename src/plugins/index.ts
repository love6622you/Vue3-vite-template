import i18n from '@/plugins/i18nPlugin'
import _ from 'lodash'
import ElementPlus from 'element-plus'
import '@/plugins/permission'

const install = (Vue: any) => {
  Vue.config.globalProperties.$baseUrl = import.meta.env.VITE_APP_BASE_API
  Vue.config.globalProperties.$_ = _
  Vue.use(i18n)
  Vue.use(ElementPlus)
}

export default { install }
