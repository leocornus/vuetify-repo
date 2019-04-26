// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'

// the style for Vuetify.
import 'vuetify/dist/vuetify.min.css'

// import local settiongs.
import LocalSettings from './settings'

Vue.config.productionTip = false
// load Vuetify.
Vue.use(Vuetify)
// use local settings.
Vue.use(LocalSettings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
