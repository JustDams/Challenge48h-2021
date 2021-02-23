import Vue from 'vue'
import App from './App'
import Connexion from './Connexion'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = {
  '/': App,
  '/Connexion': Connexion,
}

new Vue({
  render: h => h(routes[window.location.pathname]) || h(Error)
}).$mount('#app')