import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vt from '@/components/vuetify'
import SimpleLayout from '@/components/start/SimpleLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vt',
      name: 'vt',
      component: vt
    },

    {
        path: '/start',
        component: SimpleLayout,
        // set the home page for /start
        redirect: '/start/vt',
        // set the children
        children: [
            {
                path: 'vt',
                name: 'StartVt',
                component: vt
            }
        ]
    }
  ]
})
