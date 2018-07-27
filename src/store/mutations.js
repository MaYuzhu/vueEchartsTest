import {admin} from '../tools/index'
export default {

  ['admin'](){
    admin()
  },
  ['receiveConut'](state,{allCount}){
    state.allCount = allCount
    //console.log(state.allCount)
  },
  ['receiveEnv'](state,{allEnv}){
    state.allEnv = allEnv
  },
  ['receiveEch'](state,{allEch}){
    state.allEch = allEch
  },
  ['receiveCit'](state,{allCityC}){
    state.allCityC = allCityC
  },
}
