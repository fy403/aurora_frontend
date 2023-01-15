import Vue from 'vue'

import Cookies from 'js-cookie'
import Element from 'element-ui'

// 权限指令
import checkPer from '@/utils/permission'
import permission from './components/Permission'

// global css
import 'normalize.css/normalize.css'
import './assets/styles/element-variables.scss'
import './assets/styles/index.scss'

// global icons
import './assets/icons'

// 引入mock文件，正式发布时，注释掉该处即可
import '@/mock'

import App from './App'
import store from './store'
import router from './router/routers'

import './router/index' // permission control

Vue.use(checkPer)
Vue.use(permission)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
