/**
 * Created by 39557 on 2018/7/26.
 */
export const reqAllCount = () => {

  $.ajax({
    type: 'get',
    async: false,
    cache: true,
    url: 'http://192.168.20.23:50001/zzcismp/alarm/getAllProjectDeviceAlarmCount.shtml',
    dataType: 'jsonp',
    jsonp: "callback",
    success: function (json) {
      //console.log(json);
      /*for(let i=0;i<8;i++){
        allCount.push(json[0])
      }*/
    },
    error: function () {
      // alert('fail');
    }
  })
}
