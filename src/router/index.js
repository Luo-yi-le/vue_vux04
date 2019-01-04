import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'

import axios from 'axios'
// Vue.use(axios)
Vue.prototype.$http=axios
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head,
    },{
      path: '/index',
      name: 'Head',
      component: Head,
      children:[{
        path: 'm',
        name: 'Main',
        component: Main,
      }]
    }
  ]
})
