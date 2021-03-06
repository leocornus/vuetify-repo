import vt from '@/components/start/vuetify'
import SimpleLayout from '@/components/start/SimpleLayout'
import AnimationIntro from '@/apps/start/AnimationIntro'

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
        },
        {
            path: 'animationIntro',
            name: 'Animation Introduce',
            component: AnimationIntro
        }
    ]
}
