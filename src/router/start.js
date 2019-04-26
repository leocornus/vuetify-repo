import vt from '@/components/vuetify'
import SimpleLayout from '@/components/start/SimpleLayout'

// read the reference here:
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// we need use import to load this object.
export default {

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
