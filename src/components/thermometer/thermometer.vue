<!--温度计-->
<template>
  <div class="wrap01">
    <div class="title">
      <slot name="title">--标题--</slot>
    </div>
    <div class="text">
      <slot name="text">--描述--</slot>
    </div>
    <div class="chart01">
      <slot name="chart01">
        <dayButton class="dayButton"></dayButton>
        <div id="chart_t" style="width: 100%;height: 300px"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  import dayButton from '../../components/day_button/day_button'
  export default {
    name: "thermometer",
    props:{
      a:{
        type:Array,
      },
      b:{
        type:Array,
      },
      c:{
        type:Array,
      },

    },
    components:{
      dayButton
    },
    mounted(){
      let chart_t = document.getElementById('chart_t')
      //自适应宽高
      let myChartContainer = function () {
        chart_t.style.width = chart_t.innerWidth+'px';
        chart_t.style.height = chart_t.innerHeight+'px';
      };
      myChartContainer();
      let myChartT = this.$echarts.init(chart_t)
      let option = {
        title:{
          //text: '温度计',
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

          data:[{
            name:'温度计1',
            icon:'rect'
          },
            {
              name:'温度计2',
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
            //type : 'category',
            //boundaryGap : false,
            data : this.a/*['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']*/
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'温度计1',
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
            data:this.b/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name:'温度计2',

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
            data:this.c/*[12, 7, 19, 11, 15, 25, 20]*/
          }
        ],
      }

      myChartT.setOption(option)
      window.addEventListener("resize",function(){
        myChartT.resize()
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
      .dayButton
        z-index 99
        position absolute
        top 6px
        right 20px

</style>
