import Vue from 'vue'
import App from './App.vue'
import router from './router'
import binance from "./plugins/binance"
import store from "./plugins/store"

Vue.config.productionTip = false
Vue.use(binance)
Vue.use(store)

export const bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
