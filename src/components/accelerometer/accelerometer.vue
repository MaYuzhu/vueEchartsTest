<!--加速度计-->
<template>
  <div>
    <div class="wrap01">
      <div class="title">
        <slot name="title">--标题--</slot>
      </div>
      <div class="text">
        <slot name="text">--描述--</slot>
      </div>
      <div class="chart01">
        <slot name="chart01">
          <form class="form_acc01" action="javascript:;">
            <label for="acc_x"><input id="acc_x" type="radio" value="0" name="chose">X方向</label>
            <label for="acc_y"><input id="acc_y" type="radio" value="1" name="chose">Y方向</label>
            <label for="acc_z"><input id="acc_z" type="radio" value="2" name="chose">Z方向</label>

          </form>
          <div class="button_wrap">
            <div class="button_s" :class="{on:onChange===5}" @click="isCurrent(5)">5秒</div>
            <div class="button_s" :class="{on:onChange===10}" @click="isCurrent(10)">10秒</div>
            <div class="button_s" :class="{on:onChange===30}" @click="isCurrent(30)">30秒</div>
          </div>
          <div id="chart_acc" style="width: 100%;height: 300px;margin-top: 40px"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "accelerometer",
    data(){
      return{
        onChange:5
      }
    },
    methods:{
      isCurrent(num){
        this.onChange = num
      },
    },
    mounted(){
      var dataAll = [
        [-0.005, 0.007, -0.007, 0.0025, -0.004, 0.0010, -0.0021],
        [0.007, 0.005, -0.0027, 0.0025, 0.0047, -0.0045, 0.0044],
        [0.002, -0.002, 0.0055, 0.00425, 0.0014, 0.0027, -0.0020],
        [-0.004, 0.003, -0.0017, 0.0035, 0.0012, -0.0018, 0.0049],
      ]
      var myChart_acc01 = this.$echarts.init(document.getElementById('chart_acc'))
      var titles = [1,2,3,4]
      var markLineOpt = {
        animation:false,
        //图形上的文本标签
        label:{
          normal:{
            textStyle:{
              align:'right'
            }
          }
        },
        lineStyle:{

          normal:{
            type:'solid'
          }
        },

        /*data:[[{
          //起点或终点的坐标
          coord:[0,3],
          symbol:'none'
        },{
          coord:[20,13],
          symbol:'none'
        }]]*/
      }
      /* var option = {
        //分别设置标题
        title:[
          {
            text:titles[0],
            left:'2%',
            top:'10%',
            textAlign:'center'
          },
          {
            text:titles[1],
            left:'2%',
            top:'25%',
            textAlign:'center'
          },
          {
            text:titles[2],
            left:'2%',
            top:'40%',
            textAlign:'center'
          },
          {
            text:titles[3],
            left:'2%',
            top:'55%',
            textAlign:'center'
          }

        ],
        grid:[
          {x:'10%',y:'7%',width:'80%',height:'10%',top:'10%'},
          {x:'10%',y2:'7%',width:'80%',height:'10%',top:'25%'},
          {x:'10%',y3:'7%',width:'80%',height:'10%',top:'40%'},
          {x:'10%',y4:'7%',width:'80%',height:'10%',top:'55%'}
        ],
        tooltip:{
          //formatter:'Group {a}:({c})'
          trigger: 'axis'
        },
        xAxis:[
          {gridIndex:0,
            axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#f00',
                fontSize:'16'
              }
            },
          },
          {gridIndex:1,axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#f00',
                fontSize:'16'
              }
            },},
          {gridIndex:2,axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#f00',
                fontSize:'16'
              }
            },},
          {gridIndex:3,}
        ],
        yAxis:[
          {gridIndex:0,
            name: `(单位：cm/s²)`,
          },
          {gridIndex:1,},
          {gridIndex:2,},
          {gridIndex:3,}
        ],
        series:[
          {
            name:'I',
            type:'line',
            symbolSize:1,   //拐点圆的大小
            color:['green'],

            xAxisIndex:0,
            yAxisIndex:0,
            data:dataAll[0],
            markLine:markLineOpt
          },
          {
            name:'II',
            type:'line',
            xAxisIndex:1,
            yAxisIndex:1,
            data:dataAll[1],
            markLine:markLineOpt
          },
          {
            name:'III',
            type:'line',
            xAxisIndex:2,
            yAxisIndex:2,
            data:dataAll[2],
            markLine:markLineOpt
          },
          {
            name:'IV',
            type:'line',
            xAxisIndex:3,
            yAxisIndex:3,
            data:dataAll[3],
            markLine:markLineOpt
          }
        ]
      };*/
      var option = {
        title:[
          {
            text:titles[0],
            left:'2%',
            top:'10%',
            textAlign:'center'
          },
          {
            text:titles[1],
            left:'2%',
            top:'25%',
            textAlign:'center'
          },
          {
            text:titles[2],
            left:'2%',
            top:'40%',
            textAlign:'center'
          },
          {
            text:titles[3],
            left:'2%',
            top:'55%',
            textAlign:'center'
          }

        ],
        grid:[
          {x:'10%',y:'7%',width:'80%',height:'10%',top:'10%'},
          {x:'10%',y2:'7%',width:'80%',height:'10%',top:'25%'},
          {x:'10%',y3:'7%',width:'80%',height:'10%',top:'40%'},
          {x:'10%',y4:'7%',width:'80%',height:'10%',top:'55%'}
        ],
        tooltip: {
          trigger: 'axis'
        },
        xAxis:[
          {
            gridIndex:0,
            axisLine: {
              show: false
            },
            boundaryGap : false,
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#089',
                fontSize:'16'
              }
            },
            data:['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']
          },
          {
            gridIndex:1,
            axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            boundaryGap : false,
            axisLabel: {
              show: false,
              textStyle: {
                color: '#f00',
                fontSize:'16'
              }
            },
            data:['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']
          },
          {
            gridIndex:2,
            axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#f00',
                fontSize:'16'
              }
            },
            boundaryGap : false,
            data:['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']
          },
          {
            gridIndex:3,
            axisLine: {
              show: false
            },
            axisTick:{       //刻度线
              show:false
            },
            splitLine: {     //网格线
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#666',
                fontSize:'16'
              }
            },
            boundaryGap : false,
            data:['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']
          },
        ],
        yAxis:[
          {
            gridIndex:0,
            name: '(单位：cm/s²)',
            //boundaryGap:['80%', '80%'],
            //data:[-0.006,0.006],
            min:'dataMin',
            max:'dataMax',
            splitNumber:1,   //刻度分割段数，默认值为5
          interval:1,        //强制分割间隔
            splitLine: {     //网格线
              show: true
            },
            axisTick:{       //刻度线
              show:true
            },
          },
          {
            gridIndex:1,
            min:'dataMin',
            max:'dataMax',
            splitNumber:1,
            interval:1,},
          {
            gridIndex:2,
            min:'dataMin',
            max:'dataMax',
            splitNumber:1,
            interval:1,},
          {
            gridIndex:3,
            min:'dataMin',
            max:'dataMax',
            splitNumber:1,
            interval:1,}
        ],

        series:[
          {
            name:'一层东西倾斜',
            type:'line',
            stack: '1',
            xAxisIndex:0,
            yAxisIndex:0,
            data:dataAll[0]/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name:'一层南北倾斜',
            type:'line',
            stack: '2',
            xAxisIndex:1,
            yAxisIndex:1,
            data:dataAll[1]/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name:'二层东西倾斜',
            type:'line',
            stack: '3',
            xAxisIndex:2,
            yAxisIndex:2,
            data:dataAll[2]/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name:'二层南北倾斜',
            type:'line',
            stack: '4',
            xAxisIndex:3,
            yAxisIndex:3,
            data:dataAll[3]/*[8, 21, 7, 49, 4, 33, 41]*/
          }
        ],

      }
      myChart_acc01.setOption(option)
      window.addEventListener("resize",function(){
        myChart_acc01.resize()
      })
    },

  }
</script>

<style lang="stylus" scoped>
  .wrap01
    border: 1px solid #dddcdc;
    margin: 20px auto;
    .title
      width: 100%;
      height: 36px;
      font-size: 14px;
      background: #c3e8f2;
      line-height: 36px;
      padding-left: 5px;
      box-sizing: border-box;

    .text
      padding: 5px;
      font-size: 13px;
      color: #808080;
      z-index: -1;
      background: #fbfbfb;
      border-bottom: 1px solid #eee;
    .chart01
      position relative
      .form_acc01
        text-align center
        font-size 16px
        :nth-child(2)
          margin 5px 18px
      .button_wrap
        display flex
        //margin 14px auto 0 60%
        position absolute
        top 40px
        right 10%
        z-index 99
        .button_s
          width 48px
          height 28px
          min-width 48px
          border 1px solid #ccc
          margin 0 6px
          line-height 26px
          border-radius 3px
          text-align center
          font-size 14px
          font-weight 600
          cursor pointer
        .on
          background #70BB3D
          border 1px solid #70BB3D
          color #fff

</style>
