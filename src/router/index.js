import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/index'
import live from './../components/live'
import byg from './../components/byg'
import elec from './../components/elec'
import elecMore from './../components/elecMore'
import general from './../components/general'
import dlzx from './../components/dlzx'


//个人中心
import personalCenter from './../components/personal-center'
import saveMoney from './../components/personal/save-money'
import loadMoney from './../components/personal/load-money'
import transfer from './../components/personal/transfer'
import record from './../components/personal/record'
import setting from './../components/personal/setting'
import online from './../components/personal/online'
import bank from './../components/personal/bank'
import third from './../components/personal/third'


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
      path: '/elec',
      name: 'elec',
      component: elec,
    },
    {
      path:'/elecMore',
      name:'elecMore',
      component:elecMore
    },
    {
      path:'/general',
      name:'general',
      component:general
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
        {
          path: 'record',
          name: 'record',
          component: record
        },
        {
          path: 'setting',
          name: 'setting',
          component: setting
        },
        {
          path: 'online',
          name: 'online',
          component: online
        },
        {
          path: 'bank',
          name: 'bank',
          component: bank
        },
        {
          path: 'third',
          name: 'third',
          component: third
        },
      ]
    },
  ]
})
