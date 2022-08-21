# template

- **template of:** vite + vue + typescript
- **tailwindcss:** v3.x

## Started
```bash
yarn
# or `npm install`
```
---
## Develop
```bash
yarn dev
# or `npm run dev`
```
---
## Build
```bash
yarn build
# or `npm run build`
```

# 專案架構
## 使用的套件
### 1. 主要框架
使用 Vitewind 建置 Vue 3 專案（Vite + Tailwind），並使用以下套件
- vue-i18n
- vuex
- vuex-persistedstate

### 2. CSS 套件
- Sass/Scss
- Tailwind
- Element-plus

  之前專案有結合 Tailwind 與 Element-plus 共存，並使用 unplugin-auto-import 與 unplugin-vue-component 來解決 Element-plus 格式衝突的問題

### 3. 規範
- Eslint
- Prettier

## 檔案架構
- lang：定義多國語系
- layout：定義外層組件用
- lib
    - request：定義 axios 設定，並撰寫「取消重複請求」的功能
    - api：存放所有相關 api 的部份
- plugins
    - index：定義 env 變數與 i18n 與 element-plus 等相關 plugin 套件
    - i18nPlugin：從 Vuex 去得到當前設定的語系
    - permission：針對 router.beforeEach 等流程，撰寫相關行為
- store
    - index：使用 import.meta.globEager 去搜索底下 modules 全部檔案並戴入，不用個別 import 相關 Vuex 檔案。另外，使用 vuex-persistedstate 做 Vuex local 的保存
- views：定義頁面