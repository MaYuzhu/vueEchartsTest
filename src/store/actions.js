import {reqAllCount,
        reqAllEnv,
        reqAllEchart,
        reqAllCityV} from '../tools/index'


export default {
  async getAllCount ({commit},cb){
    const result = await reqAllCount()
    commit('receiveConut',{allCount:result})
    cb && cb()
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
