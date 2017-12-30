import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index'
import live from './../components/live'
import byg from './../components/byg'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/byg',
      name: 'byg',
      component: byg
    },
  ]
})
