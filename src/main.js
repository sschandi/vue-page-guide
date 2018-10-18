import Vue from 'vue'
import App from './App.vue'
import VPageGuide from './page-guide'

Vue.use(VPageGuide)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
