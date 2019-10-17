import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n/i18n'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import './styles.scss'
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import '../mock/mock.js'
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(Viewer)

// 这里是插件的默认设置
Viewer.setDefaults({
  zIndexInline: 9999
})

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
import QS from 'qs'
Vue.prototype.qs = QS
import '@/permission' // permission control

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
