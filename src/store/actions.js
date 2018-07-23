import {reqAllCount,reqAllEnv} from '../tools/index'


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
  }
}
