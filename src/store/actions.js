import {//reqAllCount,
        reqAllEnv,
        reqAllEchart,
        reqAllCityV} from '../tools/index'

import {reqAllCount}from '../api/index'


export default {
  /*async getAllCount ({commit}){
    const result = await reqAllCount()
    commit('receiveConut',{allCount:result})
    console.log(result)
  },*/
  async getAllCount ({commit}){
    const result = await $.ajax({
      type: 'get',
      async: true,
      cache: true,
      url: 'http://192.168.20.23:50001/zzcismp/alarm/getAllProjectDeviceAlarmCount.shtml',
      dataType: 'jsonp',
      jsonp: "callback",
      success: function () {

      },
      error: function () {

      }
    })
    commit('receiveConut',{allCount:result})
    //console.log(result)
  },

  async getAllEnv ({commit},cb){
    const result = await reqAllEnv()
    commit('receiveEnv',{allEnv:result})
    cb && cb()
  },
  async getAllEch ({commit},cb){
    const result = await reqAllEchart()
    commit('receiveEch',{allEch:result})
    cb && cb()
  },
  async getAllCityV ({commit},cb){
    const result = await reqAllCityV()
    commit('receiveCit',{allCityC:result})
    cb && cb()
  },
}
