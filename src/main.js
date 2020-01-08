import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/es'
import GlobalDisable from './plugins/global-disable'

Vue.use(Antd)
Vue.use(GlobalDisable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
