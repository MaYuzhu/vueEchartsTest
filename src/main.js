// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import $ from 'jquery'

import './mock/index'
import 'babel-polyfill'//兼容IE11-？
//import '../static/css/ie-css3.htc/ie-css3.htc'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
