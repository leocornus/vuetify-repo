import Vue from 'vue'
import Router from 'vue-router'

// load the start application.
import startApp from './start'

// load the insepctor application.
import inspectorApp from './inspector'

Vue.use(Router)

let routes = [
    {
      path: '/',
      redirect: '/start'
    }
]

// add the start application.
routes.push(startApp)

routes.push(inspectorApp)

export default new Router({
    "routes": routes
})
