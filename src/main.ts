import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/global.css'
import 'element-ui/lib/theme-chalk/display.css'
const Fastclick = require('fastclick')
import i18n from './i18n/i18n'
// import { Select } from 'element-ui'
// Vue.component(Select.name, Select)
Vue.config.productionTip = false
Fastclick.attach(document.body)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
