import Vue from 'vue'
import App from './App.vue'
import Error from './Error.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = {
  '/': App,
  '/UploadImage': UploadImage,
}

new Vue({
  render: h => h(routes[window.location.pathname])
}).$mount('#app')
