import Vue from 'vue'
// import App from './App.vue'
import Error from './Error.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(Error),
}).$mount('#app')
