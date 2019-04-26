import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vt from '@/components/vuetify'

// load the start application.
import startApp from './start'

Vue.use(Router)

let routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/vt',
      name: 'vt',
      component: vt
    }
]

// add the start application.
routes.push(startApp)

export default new Router({
    "routes": routes
})
