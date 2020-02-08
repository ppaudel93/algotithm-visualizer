import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './static/variables.sass'
import './static/main.sass'
import './static/common.sass'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
