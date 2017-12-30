import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index'
import live from './../components/live'
import byg from './../components/byg'
import personalCenter from './../components/personal-center'
import saveMoney from './../components/personal/save-money'
import loadMoney from './../components/personal/load-money'
import transfer from './../components/personal/transfer'



import dlzx from './../components/dlzx'

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
    {
      path: '/dlzx',
      name: 'dlzx',
      component: dlzx
    },
    {
      path: '/personal-center',
      name: 'personal-center',
      component: personalCenter,
      children: [
        {
          path: 'save-money',
          name: 'save-money',
          component: saveMoney
        },
        {
          path: 'load-money',
          name: 'load-money',
          component: loadMoney
        },
        {
          path: 'transfer',
          name: 'transfer',
          component: transfer
        },
      ]
    },
  ]
})
