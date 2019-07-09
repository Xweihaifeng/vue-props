import Vue from 'vue'
import Router from 'vue-router'
import children1 from '../components/children1'
import children2 from '../components/children2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'children1',
      component: children1
    },
    {
      path: '/2',
      name: 'children2',
      component: children2
    }
  ]
})
