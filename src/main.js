import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from 'vue3-loading-overlay'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import CustomLoading from './components/CustomLoading'
// BS
import $ from 'jquery'
// BS Icon
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 千分號
import { currency, date } from './methods/filter'
import $httpMessageState from './methods/pushMessageState'

// ---------------------表單驗證
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
window.$ = $

const app = createApp(App)
app.use(VueAxios, axios)
const options = {
  toast: true,
  position: 'center',
  showConfirmButton: false,
  confirmButtonColor: '#7b9d82',
  timer: 3000
}
// sweet alert
app.use(VueSweetalert2, options)

// 使用全域註冊(都會用到)
app.component('Loading', Loading)
app.component('CustomLoading', CustomLoading)
app.use(router)
app.mount('#app', AOS.init({ }))
app.config.globalProperties.$filters = {
  currency,
  date
}
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

// 註冊 vee-validate 三個全域元件
app.use(router).component('VForm', Form)
app.use(router).component('VField', Field)
app.use(router).component('ErrorMessage', ErrorMessage)
