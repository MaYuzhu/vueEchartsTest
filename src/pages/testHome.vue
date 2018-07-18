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
          <div class="left_top">
            <div></div>
            <ul>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>

              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p class="lcdfont">18</p>
                    <p class="shuju">数据告警</p>
                  </li>
                  <li>
                    <p class="lcdfont">10</p>
                    <p class="shuju"><span>数据预警</span></p>
                  </li>
                  <li>
                    <p class="lcdfont">00</p>
                    <p class="shuju"><span>设备异常</span></p>
                  </li>
                </ul>
                <p>青岛</p>
              </li>
            </ul>
          </div>
          <div class="left_bottom">
            <p>各站监测状态</p>
            <div id="city_jiance"></div>
            <ul>
              <li v-for="(item,index) in cityDataV" :value="index">{{item}}%</li>
            </ul>
          </div>
        </div>
        <div class="center">
          <div class="center_top"></div>
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
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
                <td class="city_time">2018-7-11</td>
              </tr>
              <tr>
                <td >
                  <div class="city jinan">济南站</div>
                </td>
                <td class="city_gao">S1设备告警，超出预警值，请加强关注</td>
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
            <p>客站环境</p>
            <table>
              <tr>
                <th></th>
                <th>风力</th>
                <th>温度</th>
                <th>湿度</th>
                <th>雨量</th>
              </tr>
              <tr>
                <td class="city"><p>济南</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
              <!--<img src="../../static/homeImage/line.png" alt="">-->
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
              </tr>
              <tr>
                <td class="city"><p>青岛</p></td>
                <td><div class="red_qiu"></div></td>
                <td><div class="yellow_qiu"></div></td>
                <td><div class="green_qiu"></div></td>
                <td><div class="red_qiu"></div></td>
              </tr>
            </table>
            <img class="line" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:102px" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:124px" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:146px" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:168px" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:190px" src="../../static/homeImage/line.png" alt="">
            <img class="line" style="top:212px" src="../../static/homeImage/line.png" alt="">
          </div>
          <div class="right_center">
            <p>变形异常</p>
            <div id="city_bian"></div>
          </div>
          <div class="right_bottom">
            <p>应力应变异常</p>
            <div id="city_ying"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
	  data(){
	    return{
	      cityDataV : [85, 40, 30, 15, 30, 40, 90, 78],
        cityData : ["潍坊","青岛","烟台","济南","临沂","泰安","菏泽","临清"]
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
     var bigH = $(".content_big").outerHeight()
      console.log(bodyH,bigH)
     if(bodyH>bigH){
       alert(1)
       $('.bg').css('height',bodyH)

     }else {
       alert(0)
       $('.bg').css('height',768)
     }
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
            bottom: '24%',
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
          grid: {
            top:'10',
            left: '5%',
            right: '7%',
            bottom: '28%',
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
              name: '',
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
            bottom: '18%',
            containLabel: true
          },
          color:['#ed1e79'],
          legend: {
            itemWidth:12,
            itemHeight:12,
            x:260,
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
              name: '变形',
              type: 'line',
              stack:'健康情况',
              symbol:'none',  //去掉点的
              smooth:true,  //让曲线变平滑
              barWidth: 12,
              data: [85, 40, 30, 15, 30, 40, 90, 78],
              itemStyle: {
                normal: {
                  lineStyle: {
                    width:3,
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
    min-width 1200px
    border solid 1px #00f

    .content_big
      width 1200px
      margin 0 auto
      padding-right 10px
      box-sizing border-box
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
            height 314px
            display flex
            width 288px
            >div
              width 18px
              height 270px
              background-image url('../../static/homeImage/lan.png')
              background-size 100% 100%
            >ul
              width 270px
              height 312px
              display flex
              flex-wrap wrap
              >li
                width 128px
                height 58px
                margin-top  20px
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
                      margin-top 4px
                    >.shuju
                      white-space:nowrap
                      font-size 12px
                      transform: scale(0.7)
                      margin-top -8px
                      color #f2f2f2
                >p
                  text-align center
                  color #f9f9f9
                  font-size 16px
                  margin-top 2px
              >li:nth-of-type(odd)
                margin-right 14px


          .left_bottom
            width 270px
            height 244px
            margin 60px 0 0 18px
            background-image url("../../static/homeImage/kuang1.png")
            background-size 100% 100%
            >p
              font-size 18px
              padding 10px 10px
              float left
              color #fff
              background url("../../static/homeImage/titlebg.png")
              background-position center
              background-size 130% 150%
            >#city_jiance
              height 244px
            >ul
              width 30px
              color #fff
              transform translate(240px, -189px)
              >li
                height 22px
        .center
          width 580px
          .center_top
            width 580px
            height 388px
            margin-left 10px
            background-image url("../../static/homeImage/shandong.png")
            background-size 100% 100%
          .center_bottom
            width 580px
            height 244px
            th
              font-size 18px
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
            .city_gao
              height 30px
              padding 0 28px
              color #e6e6e6
              font-size 15px
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
              font-size 18px
              padding 10px 10px
              float left
              color #fff
              background url("../../static/homeImage/titlebg.png")
              background-position center
              background-size 130% 150%

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
                width 10px
                height 10px
                background linear-gradient(to right, rgb(238,45,36),rgb(241,90,36),rgb(241,90,36))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(238,45,36,.9)
              .yellow_qiu
                width 10px
                height 10px
                background linear-gradient(to right, rgb(247,154,30),rgb(252,238,30),rgb(252,238,30))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(247,154,30,.9)
              .green_qiu
                width 10px
                height 10px
                background linear-gradient(to right, rgb(8,115,58),rgb(57,181,74),rgb(57,181,74))
                border-radius 50%
                box-shadow 0 0 10px 1px rgba(8,115,58,.9)
              .city
                width 80px
                color #fff
                font-size 15px
                padding  0 5px
                >p
                  width 40px
                  height 22px
                  text-align left
              td
                >div
                  margin 0 26px
            .line
              position absolute
              top 80px
              left 28px
              width 290px
              height 2px
          .right_center,.right_bottom
            width 326px
            height 170px
            margin 12px auto
            background-image url("../../static/homeImage/kuang4.png")
            background-size 100% 100%
            >p
              font-size 18px
              padding 10px 10px
              float left
              color #fff
              background url("../../static/homeImage/titlebg.png")
              background-position center
              background-size 130% 150%
            #city_bian,#city_ying
              height 140px
</style>
