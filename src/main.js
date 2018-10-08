import Vue from 'vue'
import App from './App.vue'
import PageGuide from './page-guide'

Vue.use(PageGuide)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
