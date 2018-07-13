<!--仪表盘-->
<template>
  <div>
    <div :id="id"></div>
    <!--<div id="main_01"></div>-->
  </div>
</template>

<script>
  export default {
    name: "dashboard",
    props:{
      id: {
        type: String
      },
      text_name:{
        type: String
      },
    },
    mounted(){
      $(() => {
        //第一行第一个
        var myChart_1 = this.$echarts.init(document.getElementById(this.id));

        var option_1 = {
          // backgroundColor: '#fff',
          tooltip : {
            formatter: "{a} <br/>{c} {b}"
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              restore : {show: false},
              saveAsImage : {show: false}
            }
          },
          series : [
            {
              name:this.text_name,
              type:'gauge',
              //圆心坐标，支持绝对值(px)和百分比
              center:['50%','70%'],

              //圆的大小
              radius:83,
              //指定的最小值
              min:0,
              //指定的最大值
              max:30,
              //开始角度，有效输入范围[-360,360]
              startAngle: 180,
              //结束角度，有效输入范围[-360,360]
              endAngle: 0,
              //分割段数，默认为10
              splitNumber:6,
              //坐标轴线 默认显示
              axisLine: {//坐标轴线，默认显示
                show:true,
                lineStyle: {       // 控制线条样式
                  color: [ //是一个二维数组，用于把仪表盘轴线分成若干份
                    [0.33, '#77c83d'],
                    [0.66, '#fbb03b'],
                    [1, '#f9414f']
                  ],
                  width: 7   ,
                  shadowColor : '#', //默认透明
                  shadowBlur: 10
                }
              },
              axisLabel: {//坐标轴文本标签
                show:true,
                formatter: function(v){
                  switch (v+''){
                    case '5': return '正常';
                    case '15': return '预警';
                    case '25': return '报警';
                    default: return '';
                  }
                },
                textStyle: {  //控制文本样式
                  // fontWeight: 'bolder',
                  color: '#333',
                  shadowColor : '#', //默认透明
                  shadowBlur: 10,
                }
              },
              axisTick: { // 坐标轴小标记，默认显示
                length :7,        //控制线长
                lineStyle: {       //控制线条样式
                  color: 'auto',
                  shadowColor : '#ccc', //默认透明
                  shadowBlur: 10
                }
              },
              splitLine: {           // 分隔线
                length :13,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  width:2,
                  color: 'auto',
                  shadowColor : '#ccc', //默认透明
                  shadowBlur: 10
                }
              },
              pointer: {           // 指针
                // shadowColor : '#ccc',
                // shadowBlur: 2,
                length : '46%',
                width : 6,
                color : 'auto'
              },
              title : {//仪表盘标题
                //show:true,
                //属性offsetCenter用于标题定位，数组为横纵相对仪表盘圆心坐标偏移，支持百分比（相对外半径）
                offsetCenter: [0, '35%'],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  // fontWeight: 'bolder',
                  fontSize: 13,
                  // fontStyle: 'italic',
                  color: '#333',
                  shadowColor : '#ccc', //默认透明
                  shadowBlur: 10
                }
              },
              detail : {//
                show : false,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: [0, '-40%'],
                formatter: null,
                textStyle: {
                  color: 'auto',
                  fontSize : 15
                }
              },
              data:[{value: 10, name: this.text_name}]
            }

          ]
        };
        //使用刚指定的配置项和数据显示图表。
        myChart_1.setOption(option_1)
        //使用定时器让指针动起来
        var timeTicket = setInterval(function(){
          myChart_1.setOption(option_1,true)
          option_1.series[0].data[0].value = (Math.random()*25).toFixed(2) - 0;
        },1000)
      })
    },
  }
</script>

<style lang="stylus" scoped>

</style>
