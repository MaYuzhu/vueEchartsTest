import ajax from './ajax'

export const reqAllCount = () => ajax('/alarm/getAllProjectDeviceAlarmCount.shtml')
export const reqAllEnv = () => ajax('/alarm/getAllProjectEnvDeviceAlarm.shtml')

export const reqAllEchart = () => ajax('/alarm/getAllEchart')
export const reqAllCityV = () => ajax('/alarm/getAllCity')
/*
export const reqData =
  ({buildcode,starttime,endtime,timetype}) => ajax('api/getHomeData',
                                            {buildcode,starttime,endtime,timetype})
*/


