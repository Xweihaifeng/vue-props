import Vue from 'vue'
import Router from 'vue-router'
import children2 from '../components/children2'
import home from '../components/HelloWorld'
import pass1 from '../components/passValue1/App'
import pass2 from '../components/passValue2/App'
import pass3 from '../components/passValue3/App'
import pass4 from '../components/passValue4/App'
import pass5 from '../components/passValue5/App'
import pass6 from '../components/passValue6/App'
import pass6child from '../components/passValue6/children'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/2',
            name: 'children2',
            component: children2
        },
        {
            path: '/passValue1',
            name: 'pass1',
            component: pass1
        },
        {
            path: '/passValue2',
            name: 'pass2',
            component: pass2
        },
        {
            path: '/passValue3',
            name: 'pass3',
            component: pass3
        },
        {
            path: '/passValue4',
            name: 'pass4',
            component: pass4
        },
        {
            path: '/passValue5',
            name: 'pass5',
            component: pass5
        },
        {
            path: '/passValue6',
            name: 'pass6',
            component: pass6
        },
        {
            path: '/passValue6/child',
            name: 'children',
            component: pass6child
        }
    ]
})