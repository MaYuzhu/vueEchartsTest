<!--三级首页的外部环境部分-->
<template>
  <div>
    <p>外部环境</p>
    <table class="table table_a">
      <thead>
      <tr>
        <th>风力</th>
        <th>雨量</th>
        <th>气温</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div class="red"></div>
        </td>
        <td>
          <div class="yellow"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="yellow"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="red"></div>
        </td>
        <td>
          <div class="yellow"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>
      </tbody>
    </table>
    <dayButton @_day="dayChange" style="position: relative;left:240px;top:40px;z-index:99"></dayButton>
    <devOption style="position: relative;left:240px;top:40px;z-index:99"
                v-bind:deviceName='devOption'
                @_option="getOption"></devOption>
    <div id="aaa" style="width:500px;height:400px;"></div>
    <div id="bbb" style="width:500px;height:400px;"></div>
    <a href="OpenExe://hello" style="display: block;background:lightblue;font-size:26px;">点击打开QQ</a>
    <span style="font-size:18px;font-weight:bold;font-family:lcdfont">{{username}}</span>
    <p v-for="(item, index) in testNum" style="font-size:30px"
       :class="colorClasses[item>10&&item<20?0:item>20&&item<30?1:2]">{{item}}</p>
    <span class="lcd">1234567890</span><br/>
    <span class="lcd2">1234567890</span>
    <testEmit @_setuser="getuser"></testEmit>
    <div class="bg">{{optionV}}</div>
    <div class="title_jianbian">
      <div class="xiaoqiu"></div>
      <div class="jianbianbg"></div>
      <div class="title_p">渐变标题背景</div>

    </div>
    <div style="font-size:20px;margin:5px;background:lightgrey" v-for="(item,index) in text0">{{item.text}}</div>
  </div>
</template>

<script>
  import testEmit from '../../components/test_emit'
  import dayButton from '../../components/day_button/day_button'
  import devOption from '../../components/device_option/device_option'
  export default {
    name: "environment",
    data(){
      return{
        username:'Hello World',
        text0:{},
        value_y:0,
        devOption:['风力计1', '风力计2'],
        optionV:'all',
        sele:{
          /*'风力计1': true,
          '风力计2': true*/
        },
        testNum:[11,13,22,25,30,36,40],
        colorClasses:['red1','yellow1','green1']
      }
    },
    mounted(){
      let vm = this
      $.ajax({
        type:'get',
        url:'/ratings',
        success:function (json) {
          var data = JSON.parse(json)
          //console.log(typeof data)
          vm.text0 = data.data
        }
      })
      this._ajax()
      var myChart = vm.$echarts.init(document.getElementById('bbb'));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '资源总览',
          left:'20px',
          textStyle: {
            color: "#436EEE",
            fontSize: 17,
          }
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemWidth:15,
          itemHeight:15,
          data:['可用'],
        },
        xAxis: {
          data: ["网络设备","服务器","应用","其他","虚拟机","存储"],
          splitLine:{
            show:false,
          },
        },
        yAxis: {
          splitLine:{
            show:false,
          },
        },
        series: [{
          name: '可用',
          type: 'bar',
          stack:'使用情况',
          data: [85, 40, 30, 15, 90, 78],
          itemStyle: {
            normal : {
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#999'
                }
              }
            },
            color: function(params) {
// build a color map as your need.
              var colorList = ['#eeeeee', '#3397c9','#f39646','#e02222'];
              if (params.data ==0) {
                return colorList[0];
              } else if (params.data > 0 && params.data <= 20) {
                return colorList[1];
              } else if (params.data > 20 && params.data <= 50) {
                return colorList[2];
              }
              else if (params.data > 50) {
                return colorList[3];
              }}
            /*normal: {
             color: "#70BB3D",
             lineStyle: {
             color: "#70BB3D"
             }
             }*/
          },
        },
        {
          name: '不可用',
          type: 'bar',
          stack:'使用情况',
          data: [15, 60, 70, 85, 10, 22],
          itemStyle:{
            normal:{color:"rgba(90,20,20,.1)"},
          }
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    methods:{
      getuser(msg){
        this.username = msg
      },
      dayChange(day){
        this.value_y = day
        this._ajax()
      },
      getOption(option){
        this.optionV = option
        /*if(this.optionV == 'all'){
          this.sele['风力计'+ 1] = true
          this.sele['风力计'+ 2] = true
        }else if(this.optionV == 0){
          this.sele['风力计'+ 1] = true
          this.sele['风力计'+ 2] = false
        }else if(this.optionV == 1){
          this.sele['风力计'+ 1] = false
          this.sele['风力计'+ 2] = true
        }*/
        if(this.optionV == 'all'){
          for(let a = 0;a<this.devOption.length;a++){
            this.sele[this.devOption[a]] = true
          }
        }else if(this.optionV == 0){
          for(let a = 0;a<this.devOption.length;a++){
            this.sele[this.devOption[0]] = true
            this.sele[this.devOption[a]] = false
          }
        }else if(this.optionV == 1){
          for(let a = 0;a<this.devOption.length;a++){

            this.sele[this.devOption[a]] = false
            this.sele[this.devOption[1]] = true
          }
        }

        this._ajax()
      },
      _ajax(){
        let vm = this
        $.ajax({
          type:'get',
          url:'/wind',
          async:true,
          data:{a:this.value_y},
          success:function (json) {
            let data = JSON.parse(json)
            //console.log(data.data.data.x)

            let chart_wind = document.getElementById('aaa')
            //自适应宽高
            function myChartContainer() {
              chart_wind.style.width = chart_wind.innerWidth+'px'
              chart_wind.style.height = chart_wind.innerHeight+'px'
            }
            myChartContainer()
            let myChartWind = vm.$echarts.init(chart_wind)
            /*let arrData = []
            function setA() {

              if(val == 'all' ){
                arrData = [{
                  name:'风力计1',
                  //symbol:'none',  //这句就是去掉点的
                  smooth:true,  //这句就是让曲线变平滑的
                  //type:'scatter',
                  type:'line',
                  itemStyle: {
                    normal: {
                      color: "#70BB3D",
                      lineStyle: {
                        color: "#70BB3D"
                      }
                    }
                  },
                  stack: '1',
                  //areaStyle: {normal: {}},
                  data:data.data.wind1,

                  markLine: {
                    silent: true,
                    data: [
                      {
                        yAxis: 44,
                        lineStyle:{
                          color:'red'
                        }
                      },
                      {
                        yAxis: 24,
                        lineStyle:{
                          color:'#ff00ff'
                        }
                      },
                    ],
                  }
                },
                  {
                    name:'风力计2',
                    //symbol:'none',  //这句就是去掉点的
                    smooth:true,  //这句就是让曲线变平滑的
                    type:'line',
                    itemStyle: {
                      normal: {
                        color: "#aaaaaa",
                        lineStyle: {
                          color: "#aaaaaa"
                        }
                      }
                    },
                    stack: '2',
                    //areaStyle: {normal: {}},
                    data:data.data.wind2
                  }]
              }else if(val == 0){
                arrData = [{
                  name:'风力计1',
                  //symbol:'none',  //这句就是去掉点的
                  smooth:true,  //这句就是让曲线变平滑的
                  //type:'scatter',
                  type:'line',
                  itemStyle: {
                    normal: {
                      color: "#70BB3D",
                      lineStyle: {
                        color: "#70BB3D"
                      }
                    }
                  },
                  stack: '1',
                  //areaStyle: {normal: {}},
                  data:data.data.wind1,

                  markLine: {
                    silent: true,
                    data: [
                      {
                        yAxis: 44,
                        lineStyle:{
                          color:'red'
                        }
                      },
                      {
                        yAxis: 24,
                        lineStyle:{
                          color:'#ff00ff'
                        }
                      },
                    ],
                  }
                }]
              }else if(val == 1){
                arrData =[{
                  name:'风力计2',
                  //symbol:'none',  //这句就是去掉点的
                  smooth:true,  //这句就是让曲线变平滑的
                  type:'line',
                  itemStyle: {
                    normal: {
                      color: "#aaaaaa",
                      lineStyle: {
                        color: "#aaaaaa"
                      }
                    }
                  },
                  stack: '2',
                  //areaStyle: {normal: {}},
                  data:data.data.wind2
                }]
              }
              return arrData
            }
            setA()*/
            /*if(this.optionV == 'all'){
              vm.sele = {
                // 选中'系列1'
                '风力计1': true,
                // 不选中'系列2'
                '风力计2': true
              }

            }else if(this.optionV == 0){
              vm.sele = {
                // 选中'系列1'
                '风力计1': true,
                // 不选中'系列2'
                '风力计2': false
              }
            }else if(this.optionV == 1){
              vm.sele = {
                // 选中'系列1'
                '风力计1': false,
                // 不选中'系列2'
                '风力计2': true
              }
            }*/
            let option = {
              title:{
                text: '风力计',
                textStyle: {
                  color: '#333',
                  fontWeight: 500,
                  fontSize: 20,
                }
              },
              tooltip: {
                trigger: 'axis'
              },
              legend:{
                itemWidth:10,
                itemHeight:10,
                bottom:10,
                selected: vm.sele,
                //selectedMode:'single',
                //selectedMode:'multiple',
                data:[{
                  name:'风力计1',
                  itemWidth:10,
                  itemHeight:10,
                },
                  {
                    name:'风力计2',
                    icon:'rect'
                  },]
              },
              gird:{
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {

                  type : 'category',
                  //type:'value',
                  //boundaryGap : false,
                  data : data.data.x
                }
              ],
              yAxis : [
                {
                  position:'right',
                  //type : 'category',//柱状图横向
                  type : 'value',
                  //splitArea : {show : true}
                }
              ],
              series :
              [
                {
                  name:'风力计1',
                  //symbol:'none',  //这句就是去掉点的
                  smooth:true,  //这句就是让曲线变平滑的
                  //type:'scatter',
                  type:'bar',
                  barWidth: 20,
                  //type:'line',
                  itemStyle: {
                    color: function(params) {
// build a color map as your need.
                      var colorList = ['#eeeeee', '#3397c9','#f39646','#e02222'];
                      if (params.data ==0) {
                        return colorList[0];
                      } else if (params.data > 0 && params.data <= 10) {
                        return colorList[1];
                      } else if (params.data > 10 && params.data <= 30) {
                        return colorList[2];
                      }
                      else if (params.data > 30) {
                        return colorList[3];
                      }
                    }
                    /*normal: {
                      color: "#70BB3D",
                      lineStyle: {
                        color: "#70BB3D"
                      }
                    }*/
                  },
                  stack: '1',
                  //areaStyle: {normal: {}},
                  data:data.data.wind1,

                  markLine: {
                    silent: true,
                    data: [
                      {
                        yAxis: 44,
                        lineStyle:{
                          color:'red'
                        }
                      },
                      {
                        yAxis: 24,
                        lineStyle:{
                          color:'#ff00ff'
                        }
                      },
                    ],
                  }
                },
                {
                  name:'风力计2',
                  //symbol:'none',  //这句就是去掉点的
                  smooth:true,  //这句就是让曲线变平滑的
                  type:'line',
                  //type:'bar',
                  barWidth: 10,
                  itemStyle: {
                    /*normal: {
                      color: "#aaaaaa",
                      lineStyle: {
                        color: "#aaaaaa"
                      }
                    },*/
                  normal:
                    {areaStyle:
                        {type: 'default',
                        color: new vm.$echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                      [
                        {offset: 0, color: 'red'},
                        {offset: 0.5, color: 'pink'},
                        {offset: 1, color: 'rgba(200,200,200,.3)'}
                      ]
                    )
                        }
                    }
                  }
                    /*lineStyle:{
                      color: new vm.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: 'red'},
                          {offset: 0.5, color: 'pink'},
                          {offset: 1, color: '#ddd'}
                        ]
                      )
                    }*/,


                  stack: '2',
                  //areaStyle: {normal: {}},
                  data:data.data.wind2
                }
              ],
            }

            myChartWind.setOption(option)
            window.addEventListener("resize",function(){
              myChartWind.resize()
            })
          }
        })
      }
    },
    components:{
      testEmit,
      dayButton,
      devOption
    },

  }
</script>

<style lang="stylus" scoped>
  @font-face{
    font-family: 'lcdfont';
    src: url('../../../static/css/lcdfont/alarm_clock-webfont.woff'); /* IE9 Compat Modes */
    src: url('../../../static/css/lcdfont/alarm_clock-webfont.woff?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../../static/css/lcdfont/alarm_clock-webfont.woff') format('woff'), /* Modern Browsers */
    url('../../../static/css/lcdfont/alarm_clock.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('../../../static/css/lcdfont/alarm_clock-webfont.woff') format('svg'); /* Legacy iOS */

  }
  @font-face{
    font-family: 'lcdfont2';
    src: url('../../../static/css/lcdfont2/ds-digit-webfont.woff'); /* IE9 Compat Modes */
    src: url('../../../static/css/lcdfont2/ds-digit-webfont.woff?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../../static/css/lcdfont2/ds-digit-webfont.woff') format('woff'), /* Modern Browsers */
    url('../../../static/css/lcdfont2/ds-digit-webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
    url('../../../static/css/lcdfont2/ds-digit-webfont.woff') format('svg'); /* Legacy iOS */

  }

  .lcd
    font-family lcdfont
    font-size 35px
  .lcd2
    font-family lcdfont2
    font-size 35px
    color #122b40
  .bg
    width 300px
    height 200px
    border 1px solid
    //background-image url("../../../static/imgs/arrows.png")
    background-size auto 100%
    background-repeat repeat-x
    background-image: url("../../../static/imgs/logo.png")
    margin-bottom:0px;
    margin-top:0px;
    margin-left:0px;
    margin-right:0px;
    z-index:-1;
  .red1
    color red
    //font-family:'DS-Digital'
    font-family:'lcdfont2'
  .yellow1
    color yellow
    //font-family:'DS-Digital'
    font-family:'lcdfont2'
  .green1
    color green
    //font-family:'DS-Digital'
    font-family:'lcdfont2'
  .title_jianbian
    width 300px
    height 50px
    background:#182142
    //box-shadow 0 0 1px 1px #f00
    //background  linear-gradient(to right,rgba(255,255,255,0.1),rgba(255,255,255,0.5),rgba(255,255,255,0.1))
    >.xiaoqiu
      width 10px
      height 10px
      background linear-gradient(to right, rgb(238,45,36),rgb(241,90,36),rgb(241,90,36))
      border-radius 50%
      box-shadow 0 0 10px 1px rgba(238,45,36,.9)
    >.jianbianbg
      width 30%
      height 20px
      //margin 0px auto
      //line-height 30px
      //text-align center

      transform translate(104px,20px)
      //box-shadow 0 0 40px 10px #5277e3
      box-shadow 0 0 100px 10px rgba(26,34,67,0.1)
      //background  linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0))
      background  radial-gradient(circle,rgba(255,255,255,0.5),rgba(255,255,255,0))
      filter blur(2px)
    >.title_p
      text-align center
      font-size 16px
      color white
      //height 20px



</style>
