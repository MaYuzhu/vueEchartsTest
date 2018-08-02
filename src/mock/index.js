import Mock from 'mockjs'

import data from './data.json'
import wind from './test01.json'
import home from './test02.json'
import page from './pageList.json'

Mock.mock('/goods', {code: 0, data: data.goods})  // {code: 0, data: goods数据}

Mock.mock('/ratings', {code: 0, data: data.ratings})  // {code: 0, data: ratings数据}

Mock.mock('/info', {code: 0, data: data.info})  // {code: 0, data: info数据}

Mock.mock('/wind?a=0', {code: 1, data: wind.data})
Mock.mock('/wind?a=1', {code: 1, data: wind.data_day})
Mock.mock('/wind?a=2', {code: 1, data: wind.data_mon})

Mock.mock('/alarm/getAllProjectDeviceAlarmCount.shtml', home.AllCount)
Mock.mock('/alarm/getAllProjectEnvDeviceAlarm.shtml', home.AllEnv)
Mock.mock('/alarm/getAllEchart', home.AllEcharts)
Mock.mock('/alarm/getAllCity', home.AllCityV)

Mock.mock('/page', page)
