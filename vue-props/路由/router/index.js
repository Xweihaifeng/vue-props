import Vue from 'vue'
import router from 'vue-router'
import home from '../home.vue'
import children from '../children.vue'
Vue.use(router)

export default new router({
  mode: 'history',
  routes: [
    {  path: '/', component:home  },
    { name: 'children', path: '/children', component: children }
  ]
})
