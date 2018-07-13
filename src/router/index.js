import Vue from 'vue'
import Router from 'vue-router'

import login from '../pages/login/login'
import thirdHomePage from '../pages/home/third_home_page'
import secondHomePage from '../pages/home/second_home_page'
import monitoring_data from '../pages/monitoring_data/monitoring_data'
import data_early_warning from '../pages/data_early_warning/data_early_warning'
import device_manage from '../pages/device_manage/device_manage'
import jiegou_fenxi from '../pages/jiegou_fenxi/jiegou_fenxi'



Vue.use(Router)

export default new Router({
  mode: 'history',


  routes: [
    {
      path:'/',
      component:login,
      meta:{
        showHeader:false
      }
    },
    {
      path: '/secondHomePage',
      component: secondHomePage,
      meta:{
        showHeader:true,
        requireAuth:true
      }
    },
    {
      path: '/thirdHomePage',
      component: thirdHomePage,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/monitoring_data',
      component: monitoring_data,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/data_early_warning',
      component: data_early_warning,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/device_manage',
      component: device_manage,
      meta:{
        showHeader:true
      }
    },
    {
      path: '/jiegou_fenxi',
      component: jiegou_fenxi,
      meta:{
        showHeader:true
      }
    },
  ]
})
