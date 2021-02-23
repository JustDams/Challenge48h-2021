import Vue from 'vue'

import App from './App.vue'
import ErrorPage from './Error.vue'
import Connexion from './Connexion'
import UploadImage from './UploadImage'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/Connexion': Connexion,
  '/UploadImage': UploadImage,
}

new Vue({
  render: h => h(routes[window.location.pathname] || ErrorPage)
}).$mount('#app')
