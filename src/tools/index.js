import ajax from './ajax'

export const admin = () => ajax('/api/zzcismp/user/login.shtml?username=admin&password=123456')

/*export const reqAllCount = () => ajax('/api/zzcismp/tsd/getBuildDevsData.shtml?' +

  'buildcode=3506I0006&' +
  'starttime=2018-06-19+09%3A34%3A12&' +
  'endtime=2018-06-20+09%3A34%3A12&' +
  'timetype=minute')*/

export const reqAllCount = () => ajax('/alarm/getAllProjectDeviceAlarmCount.shtml')
export const reqAllEnv = () => ajax('/alarm/getAllProjectEnvDeviceAlarm.shtml')

export const reqAllEchart = () => ajax('/alarm/getAllEchart')
export const reqAllCityV = () => ajax('/alarm/getAllCity')
/*
export const reqData =
  ({buildcode,starttime,endtime,timetype}) => ajax('api/getHomeData',
                                            {buildcode,starttime,endtime,timetype})
*/


