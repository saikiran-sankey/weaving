import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import router from './Router.js'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
// Vue.config.productionTip = false
Vue.config.productionTip = true // show tips and warnings in the developer console of your browser

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})
