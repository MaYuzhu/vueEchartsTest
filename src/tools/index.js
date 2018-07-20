import ajax from './ajax'

export const reqData = () => ajax('api/getHomeData')

/*
export const reqData =
  ({buildcode,starttime,endtime,timetype}) => ajax('api/getHomeData',
                                            {buildcode,starttime,endtime,timetype})
*/


