import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 導入所有文件
const files = import.meta.globEager('./modules/*.ts')
const modules = {}
for (const key in files) {
  const file = files[key].default
  if (file != undefined) {
    // 截取文件名
    modules[key.replace(/(\.\/modules\/)|(\.ts)/g, '')] = file
  }
}

const store = createStore({
  modules,
  plugins: [
    createPersistedState({
      paths: ['persistedState']
    })
  ]
})

export default store
