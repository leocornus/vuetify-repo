import Vue from 'vue'
import Router from 'vue-router'

// load the start application.
import startApp from './start'

Vue.use(Router)

let routes = [
    {
      path: '/',
      redirect: '/start'
    }
]

// add the start application.
routes.push(startApp)

export default new Router({
    "routes": routes
})
