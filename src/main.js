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
import * as vueJsonp from 'vue-jsonp'
import './common/font/font.css'

import VueKindEditor from 'vue-kindeditor';
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

// 引入样式文件
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
Vue.L = Vue.prototype.$L = L

Vue.use(vueJsonp)
Vue.use(VueKindEditor);
Vue.use(Viewer)
console.log('process', process, process.env.NODE_ENV, process.env.VUE_APP_API)
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
