<template>
  <div class="bg">
    <div class="content_big">
      <header>
        <img src="../../static/homeImage/logo.png" alt="">
        <p class="title_p">
          <span>铁</span><span>路</span><span>客</span><span>站</span><span>结</span><span>构</span><span>健</span><span>康</span><span>检</span><span>测</span><span>平</span><span>台</span>
        </p>

      </header>
      <div class="content_wrap">
        <div class="left">
          <!--<div>{{newCount[0]}}</div>-->
          <div class="left_top">
            <div></div>
            <ul style="margin-right:14px">
              <li>
                <p class="shuju">数据告警</p>
                <p class="shuju">数据预警</p>
                <p class="shuju">设备异常</p>
              </li>
              <li v-for="(item,index) in newCount[0]" :key="index">
                <ul>
                  <li>
                    <p class="lcdfont">{{item.count.data_warning_num>=0&&item.count.data_warning_num<10
                      ?'0'+item.count.data_warning_num:item.count.data_warning_num}}</p>
                  </li>
                  <li>
                    <p class="lcdfont_y">{{item.count.device_exception_num>=0&&item.count.device_exception_num<10
                      ?'0'+item.count.device_exception_num:item.count.device_exception_num}}</p>
                  </li>
                  <li>
                    <p class="lcdfont_y">{{item.count.data_early_warning_num>=0&&item.count.data_early_warning_num<10
                      ?'0'+item.count.data_early_warning_num:item.count.data_early_warning_num}}</p>
                  </li>
                </ul>
                <p>{{item.project_name}}</p>
              </li>
              <!--<li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>-->
            </ul>
            <ul>
              <li>
                <p class="shuju">数据告警</p>
                <p class="shuju">数据预警</p>
                <p class="shuju">设备异常</p>
              </li>
              <li v-for="(item,index) in newCount[1]" :key="index">
                <ul>
                  <li>
                    <p class="lcdfont">{{item.count.data_warning_num>=0&&item.count.data_warning_num<10
                      ?'0'+item.count.data_warning_num:item.count.data_warning_num}}</p>
                  </li>
                  <li>
                    <p class="lcdfont_y">{{item.count.device_exception_num>=0&&item.count.device_exception_num<10
                      ?'0'+item.count.device_exception_num:item.count.device_exception_num}}</p>
                  </li>
                  <li>
                    <p class="lcdfont_y">{{item.count.data_early_warning_num>=0&&item.count.data_early_warning_num<10
                      ?'0'+item.count.data_early_warning_num:item.count.data_early_warning_num}}</p>
                  </li>
                </ul>
                <p>{{item.project_name}}</p>
              </li>
            </ul>
          </div>
          <div class="left_center">
            <p><img src="../../static/homeImage/titlebg.png" alt="">摄像监控</p>
            <div class="jiankong">
              <div>
                <p>2018-07-19 周四 16:36:00 青岛站</p>
                <img src="../../static/homeImage/image1.png" alt="">
              </div>
              <div>
                <p>2018-07-19 周四 16:36:00 济南站</p>
                <img src="../../static/homeImage/image2.png" alt="">
              </div>
            </div>
          </div>
          <div class="left_bottom">
            <p><img src="../../static/homeImage/titlebg.png" alt="">各站监测状态</p>
            <div id="city_jiance"></div>
            <ul>
              <li v-for="(item,index) in cityDataV" :value="index">{{item}}%</li>
            </ul>
          </div>
        </div>
        <div class="center">
          <div class="center_top">
            <div class="tuli">
              <div></div><p>主要铁路线路</p>
            </div>
          </div>
          <div class="center_bottom">
            <table border="0" style="margin: 0 auto">
              <tr>
                <th style="height: 30px">告警区域</th>
                <th>告警内容</th>
                <th>时间</th>
              </tr>
              <tr>
                <td>
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city qingdao">青岛站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，XXXXXX请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city yantai">烟台站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city linyi">临沂站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city heze">菏泽站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值100pa，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city taian">泰安站</div>
                </td>
                <td class="city_gao">Y1雨量计超出预警值0.2mm，请关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td></td>
                <td class="city_gao"></td>
                <td class="city_time"><a href="#">更多&gt;&gt;</a></td>
              </tr>
            </table>

          </div>
        </div>
        <div class="right">
          <div class="right_top">
            <p><img src="../../static/homeImage/titlebg.png" alt="">客站环境</p>
            <table>
              <tr>
                <th></th>
                <th>风力</th>
                <th>温度</th>
                <th>湿度</th>
                <th>雨量</th>
              </tr>
              <tr v-for="(item,index) in allEnv" :key="index">
                <!--s = s.Substring(0,s.Length - 1)-->
                <td class="city"><p>{{item.project_name.substring(0,2)}}</p></td>
                <td v-for="(itemType,index) in item.alarm_info" :key="index">
                  <div :class="colorClasses[itemType.level-1]"></div>
                </td>
                <!--<td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>-->
              </tr>
              <!--<tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>-->
            </table>
            <div>
              <img class="line" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:101px" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:123px" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:145px" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:167px" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:189px" src="../../static/homeImage/line.png" alt="">
              <img class="line" style="top:211px" src="../../static/homeImage/line.png" alt="">
            </div>

          </div>
          <div class="right_center">
            <p><img src="../../static/homeImage/titlebg.png" alt="">变形异常</p>
            <div id="city_bian"></div>
          </div>
          <div class="right_bottom">
            <p><img src="../../static/homeImage/titlebg.png" alt="">应力应变异常</p>
            <div id="city_ying"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
	export default {
	  data(){
	    return{
	      cityDataV : [85, 40, 30, 15, 30, 40, 90, 78],
        cityData : ["潍坊","青岛","烟台","济南","临沂","泰安","菏泽","临清"],
        colorClasses:['green_qiu','yellow_qiu','red_qiu']
      }
    },
    computed:{
      ...mapState(['allCount','allEnv']),
      newCount:function(){
        return this._sliceArray(this.allCount,4)
      }
    },
	  mounted(){
      function isIE() { //ie?
        if (!!window.ActiveXObject || "ActiveXObject" in window){
          //alert(1111111)
          $('.title_p').html('<span>铁路客站结构健康检测平台</span>')
          $('.title_p span').css("color","white")
        }
      }
      isIE()
     //背景高度满屏
     var bodyH = document.body.offsetHeight
     //var bgH = $(".bg").outerHeight()
     //var bigH = $(".content_big").outerHeight()
     var bgH = document.querySelector('.bg').offsetHeight
     var bigH = document.querySelector('.content_big').offsetHeight
      //console.log('body='+bodyH,'c='+bigH,'bg='+bgH)
     if(bodyH>bigH){
       //alert(1)
       //$('.bg').css('height',bodyH)
     }else {
       //alert(0)
       //$('.bg').css('height',722)
     }
     this.$store.dispatch('getAllCount')
     this.$store.dispatch('getAllEnv')
     this._jiance()
     this._bian()
     this._ying()
    },
    methods:{
	    _jiance(){
	      let vm = this

        let myChart = vm.$echarts.init(document.getElementById('city_jiance'));
        // 指定图表的配置项和数据
        let option = {
          //提示框
          tooltip: {
            trigger: "axis",
            formatter:'{b1}: {c1}%'
          },
          grid: {
            top:'10',
            left: '5%',
            right: '12%',
            bottom: '7%',
            containLabel: true
          },
          xAxis: {
            type : 'value',
            show:true,
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },
            axisLabel:{
              show:false,
              color:'#fff',
              textStyle: {
                color: '#fff'
              }
            },
            splitLine:{
              show:false,
            },
          },
          yAxis: {
            type : 'category',
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },

            axisLabel:{
              color:'#fff',
              textStyle: {
                color: '#fff'
              }
            },
            data:this.cityData.reverse(),
            splitLine:{
              show:false,
            },
          },
          series: [
            {
              name: '',
              type: 'bar',
              stack:'健康情况1',
              barWidth: 12,
              barGap:'-100%',
              data: [100, 100, 100, 100, 100, 100, 100, 100],
              //data: [15, 60, 70, 85, 70, 60, 10, 22],
              itemStyle:{
                normal:{
                  color:"rgba(0,210,233,0.2)",
                },
              }
            },
            {
            name: '',
            type: 'bar',
            stack:'健康情况',
            barWidth: 12,
            data: [85, 40, 30, 15, 30, 40, 90, 78].reverse(),
            itemStyle: {
              normal : {
                label: {
                  show: false,
                  position: 'right',
                  textStyle: {
                    color: '#fff'
                  }
                },

                color: function(params) {
                  var colorList = ['#ed1e79', '#fcee21','#00d2e9'];
                  if (params.data <= 20) {
                    return colorList[0];
                  } else if (params.data > 20 && params.data <= 40) {
                    return colorList[1];
                  } else if (params.data > 40) {
                    return colorList[2];
                  }
                }
              },



            },
          },

          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      _bian(){
        let vm = this
        let myChart = vm.$echarts.init(document.getElementById('city_bian'));
        let option = {
          //提示框
          tooltip: {
            trigger: "axis",
            formatter:'{b0}: {c0}%'
          },
          color:['#06beff'],
          legend: {
            itemWidth:12,
            itemHeight:12,
            x:240,
            y:-6,
            textStyle:{//图例文字的样式
              color:'#fff',
              fontSize:12
            },
            data:[{
              name:'变形',
              icon:'rect',
              color:'red',
            }],
          },
          grid: {
            top:'10',
            left: '5%',
            right: '7%',
            bottom: '14%',
            containLabel: true
          },
          xAxis: {
            type : 'category',
            show:true,
            data:this.cityData,
            boundaryGap : false,
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },
            axisLabel:{
              interval:0,
              show:true,
              color:'#fff',
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            splitLine:{
              show:false,//网格线
            },
          },
          yAxis: {
            type : 'value',
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },
            axisLabel:{
              color:'#fff',
              textStyle: {
                color: '#fff'
              }
            },
            data:this.cityData,
            splitLine:{
              show:false,
            },
          },
          series: [
            {
              name: '变形',
              type: 'line',
              stack:'健康情况',
              barWidth: 12,
              data: [85, 40, 30, 15, 30, 40, 90, 78],
              itemStyle: {
                normal: {
                  color: '#06beff',
                  lineStyle: {
                    color: '#06beff',
                  },
                  areaStyle:
                    {type: 'default',
                      color: new vm.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: 'rgba(6,190,255,.9)'},
                          {offset: 0.5, color: 'rgba(6,190,255,.4)'},
                          {offset: 1, color: 'rgba(6,190,255,.1)'}
                        ]
                      )
                    }
                },

              },
            },

          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      _ying(){
        let vm = this
        let myChart = vm.$echarts.init(document.getElementById('city_ying'));
        let option = {
          //提示框
          tooltip: {
            trigger: "axis",
            formatter:'{b0}: {c0}%'
          },
          grid: {
            top:'10',
            left: '5%',
            right: '7%',
            bottom: '14%',
            containLabel: true
          },
          color:['#ed1e79'],
          legend: {
            itemWidth:12,
            itemHeight:12,
            x:240,
            y:-6,
            textStyle:{//图例文字的样式
              color:'#fff',
              fontSize:12
            },
            data:[{
              name:'应力应变',
              icon:'rect',
              color:'red',
            }],
          },
          xAxis: {
            type : 'category',
            show:true,
            data:this.cityData,
            boundaryGap : true,//和y轴有距离
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },
            axisLabel:{
              interval:0,
              show:true,
              color:'#fff',
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            splitLine:{
              show:false,//网格线
            },
          },
          yAxis: {
            type : 'value',
            axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color: '#fff'
              },
            },
            axisLabel:{
              color:'#fff',
              textStyle: {
                color: '#fff'
              }
            },
            data:this.cityData,
            splitLine:{
              show:false,
            },
          },
          series: [
            {
              name: '应力应变',
              type: 'line',
              stack:'健康情况',
              symbol:'none',  //去掉点的
              smooth:true,  //让曲线变平滑
              barWidth: 12,
              data: [85, 40, 30, 15, 30, 40, 90, 78],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#ed1e79',
                  },
                },
              },
            },

          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },

        /** 将一个数组分成几个同等长度的数组
         array[分割的原数组]
         size[每个子数组的长度]*/

      _sliceArray(array, size) {
      var result = [];
      for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
      },
      //截取字符串
      _sliceCity(str){
        return str.Substring(0,str.length-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @font-face{
    font-family: 'lcdfont2';
    src: url('../../static/css/lcdfont2/ds-digit-webfont.woff'); /* IE9 Compat Modes */
    src: url('../../static/css/lcdfont2/ds-digit-webfont.woff?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../static/css/lcdfont2/ds-digit-webfont.woff') format('woff'), /* Modern Browsers */
    url('../../static/css/lcdfont2/ds-digit-webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('../../static/css/lcdfont2/ds-digit-webfont.woff') format('svg'); /* Legacy iOS */
    }
  .bg
    background-image url('../../static/homeImage/bg.png')
    background-size 100% 100%
    background-repeat no-repeat
    width 100%
    height 100%
    min-width 1200px
    min-height 747px
    .content_big
      width 1200px
      margin 0 auto
      padding-right 10px
      box-sizing border-box
      overflow hidden
      header
        position relative
        img
          margin-top -24px
          width 100%
        .title_p
          position absolute
          top 36%
          left 50%
          transform translate(-50%,-50%)
          font-family '微软雅黑'
          font-size 24px
          font-weight 900
          letter-spacing 1px
          span
            background: linear-gradient(to right, #fff, #fff, #979797)
            -webkit-background-clip text
            color transparent

      .content_wrap
        display flex
        justify-content space-between
        .left
          .left_top
            display flex
            width 288px
            height 198px
            >div
              width 18px
              height 174px
              background-image url('../../static/homeImage/lan.png')
              background-size 100% 100%
            >ul
              width 128px
              margin-top -16px
              >li
                width 128px
                height 44px
                margin-top 6px
                background-image url("../../static/homeImage/shuju.png")
                background-size 100% 100%
                >ul
                  display flex
                  >li
                    width 42px
                    text-align center
                    >.lcdfont
                      font-family lcdfont2
                      font-size 26px
                      color #ff0000
                      margin-top 1px
                    >.lcdfont_y
                      font-family lcdfont2
                      font-size 26px
                      color #fbb03b
                      margin-top 1px
                >p
                  text-align center
                  color #f9f9f9
                  font-size 13px
                  margin-top -2px
              >:nth-child(1)
                width 128px
                height 20px
                background rgba(42,58,116,.7)
                display flex
                margin-bottom -4px
                >.shuju
                  white-space:nowrap
                  font-size 12px
                  transform: scale(0.76) translate(4px,0px)
                  color #f2f2f2
                  margin-left -6px
                  margin-top 2px
          .left_center
            width 270px
            height 170px
            background url("../../static/homeImage/jiankong.png")
            background-size 100% 100%
            margin 20px 0 0 18px
            >p
              font-size 15px
              padding 10px 10px
              float left
              color #fff
              //background url("../../static/homeImage/titlebg.png")
              position relative
              img
                position absolute
                top -4px
                left -12px
                width 130%
                height 120%
                opacity 0.6
            >.jiankong
              width 246px
              height 122px
              margin 0 auto
              display flex
              justify-content space-around
              transform translate(0,-4px)
              >div
                width 49%
                height 100%
                position relative
                p
                  position absolute
                  background rgba(10,10,10,.7)
                  color #fff
                  font-size 12px
                img
                  width 100%
                  height 100%
          .left_bottom
            width 270px
            height 244px
            margin 12px 0 0 18px
            background-image url("../../static/homeImage/kuang1.png")
            background-size 100% 100%

            >p
              font-size 15px
              padding 10px 10px
              float left
              color #fff
              position relative
              img
                position absolute
                top -4px
                left -12px
                width 130%
                height 120%
                opacity 0.6
            >#city_jiance
              height 204px
            >ul
              width 30px
              color #fff
              transform translate(240px, -153px)
              >li
                height 22.5px
        .center
          width 580px
          .center_top
            position relative
            width 580px
            height 388px
            margin-left 10px
            background-image url("../../static/homeImage/shandong.png")
            background-size 100% 100%
            .tuli
              position absolute
              bottom 38px
              right 58px
              display flex
              align-items center
              div
                width 20px
                height 2px
                background #cf7a00
              p
                font-size 12px
                color #fff
          .center_bottom
            width 580px
            height 244px
            th
              font-size 15px
              color #fff
            .city
              width 100px
              height 22px
              line-height 22px
              background-size 100% 100%
              background-repeat no-repeat
              color #e6e6e6
              font-size 14px
            .jinan
              background-image url("../../static/homeImage/zhansuo1.png")
            .qingdao
              background-image url("../../static/homeImage/zhansuo2.png")
            .yantai
              background-image url("../../static/homeImage/button3.png")
            .linyi
              background-image url("../../static/homeImage/zhansuo4.png")
            .heze
              background-image url("../../static/homeImage/button5.png")
            .taian
              background-image url("../../static/homeImage/zhansuo8.png")
            .city_gao
              height 32px
              padding 0 10px 0 20px
              text-align left
              color #e6e6e6
              font-size 13px
            .city_time
              color #e6e6e6
            a
              color #06beff
              float right
        .right
          width 326px
          .right_top
            position relative
            width 326px
            height 245px
            margin 0 auto
            background-image url("../../static/homeImage/kuang3.png")
            background-size 100% 100%
            >p
              font-size 15px
              padding 10px 10px
              float left
              color #fff
              position relative
              img
                position absolute
                top -4px
                left -12px
                width 130%
                height 120%
                opacity 0.6
            table
              position absolute
              width 289px
              top 26px
              left 14px
              th
                height 24px
                font-size 14px
                color #fff
              .red_qiu
                width 6px
                height 6px
                background linear-gradient(to right, rgb(238,45,36),rgb(241,90,36),rgb(241,90,36))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(238,45,36,.9)
              .yellow_qiu
                width 6px
                height 6px
                background linear-gradient(to right, rgb(247,154,30),rgb(252,238,30),rgb(252,238,30))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(247,154,30,.9)
              .green_qiu
                width 6px
                height 6px
                background linear-gradient(to right, rgb(8,115,58),rgb(57,181,74),rgb(57,181,74))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(8,115,58,.9)
              .city
                width 80px
                color #fff
                font-size 13px
                padding  0 5px
                >p
                  width 40px
                  height 22px
                  line-height 22px
                  text-align left
              td
                >div
                  margin 0 26px
            .line
              position absolute
              top 79px
              left 28px
              width 290px
              height 2px
          .right_center,.right_bottom
            width 326px
            height 176px
            margin 20px auto
            background-image url("../../static/homeImage/kuang4.png")
            background-size 100% 100%
            >p
              font-size 15px
              padding 10px 10px
              float left
              color #fff
              position relative
              img
                position absolute
                top -4px
                left -12px
                width 130%
                height 120%
                opacity 0.6
            #city_bian,#city_ying
              height 140px
          .right_bottom
            background-image url("../../static/homeImage/k5.png")
</style>
