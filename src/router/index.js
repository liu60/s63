import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index'
import live from './../components/live'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
  ]
})
