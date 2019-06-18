import InspectorIndex from '@/pages/InspectorIndex'
import SimpleLayout from '@/components/start/SimpleLayout'

// read the reference here:
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// we need use import to load this object.
export default {

    path: '/inspector',
    component: SimpleLayout,
    // set the home page for /start
    redirect: '/inspector/index',
    // set the children
    children: [
        {
            path: 'index',
            name: 'Inspector Index',
            component: InspectorIndex 
        }
    ]
}
