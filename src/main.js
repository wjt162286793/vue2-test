import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/reset.css'
import axios from '@/utils/request' 
// Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(router)
Vue.use(store)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  axios,
  beforeCreate(){
    Vue.prototype.$eventBus = this
  },
  render: h => h(App),
}).$mount('#app')
