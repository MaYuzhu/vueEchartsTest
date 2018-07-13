<!--倾角计-->
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
        <div class="row">
          <div class="col-md-6">
            <deviceOption v-bind:deviceName="deviceName"></deviceOption>
          </div>
          <div class="col-md-6">
            <dayButton2 class="dayButton2"></dayButton2>
          </div>
        </div>

        <div id="chart_i"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  import deviceOption from '../../components/device_option/device_option'
  import dayButton2 from '../../components/day_button2/day_button2'
  export default {
    name: "inclinometer",
    data(){
      return{
        deviceName:['一层东西倾斜','一层南北倾斜','二层东西倾斜','二层南北倾斜','三层东西倾斜','三层南北倾斜',
                    '四层东西倾斜','四层南北倾斜','五层东西倾斜','六层东西倾斜', '七层东西倾斜','八层东西倾斜']
      }
    },
    props:{
      a:{
        type:Array,
      },
      b1:{
        type:Array,
      },
      b2:{
        type:Array,
      },
      b3:{
        type:Array,
      },
      b4:{
        type:Array,
      },
      b5:{
        type:Array,
      },
      b6:{
        type:Array,
      },
      b7:{
        type:Array,
      },
      b8:{
        type:Array,
      },
      b9:{
        type:Array,
      },
      b10:{
        type:Array,
      },
      b11:{
        type:Array,
      },
      b12:{
        type:Array,
      },
    },
    components:{
      deviceOption,
      dayButton2
    },
    mounted(){
      let chart_i = document.getElementById('chart_i')
      //自适应宽高
      let myChartContainer = function () {
        chart_i.style.width = chart_i.innerWidth+'px';
        chart_i.style.height = chart_i.innerHeight+'px';
      };
      myChartContainer();
      let myChartI = this.$echarts.init(chart_i)
      let option = {
        title: {
          /*text: '倾角计',*/
          textStyle: {
            color: '#333',
            fontWeight: 500,
            fontSize: 20,
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: [
          /*{
            bottom:28,
            data:['一层东西倾斜','一层南北倾斜','二层东西倾斜','二层南北倾斜','三层东西倾斜','三层南北倾斜']
          },
          {
            bottom:8,
            data:['四层东西倾斜','四层南北倾斜','五层东西倾斜','六层东西倾斜', '七层东西倾斜','八层东西倾斜']
          }*/
          {
            left: 'center',
            top:'74%',
            bottom:'bottom',
            data: [
              '一层东西倾斜',
              '一层南北倾斜',
              '二层东西倾斜',
              '二层南北倾斜',
              '三层东西倾斜',
              '三层南北倾斜',
              '四层东西倾斜',
              '四层南北倾斜',
              '五层东西倾斜',
              '六层东西倾斜',
              '七层东西倾斜',
              '八层东西倾斜',
            ]
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '28%',
          containLabel: true
        },
        xAxis: [
          {
            //type : 'category',
            boundaryGap: false,//与y轴没有间隔
            data: this.a/*['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7']*/
          }
        ],
        yAxis: [
          {
            name: 'mm',
            type: 'value',

          }
        ],
        series: [
          {
            name: '一层东西倾斜',
            type: 'line',
            stack: '1',
            //areaStyle: {normal: {}},
            data: this.b1/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '一层南北倾斜',
            type: 'line',
            stack: '2',
            //areaStyle: {normal: {}},
            data: this.b2/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name: '二层东西倾斜',
            type: 'line',
            stack: '3',
            //areaStyle: {normal: {}},
            data: this.b3/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '二层南北倾斜',
            type: 'line',
            stack: '4',
            //areaStyle: {normal: {}},
            data: this.b4/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name: '三层东西倾斜',
            type: 'line',
            stack: '5',
            //areaStyle: {normal: {}},
            data: this.b5/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '三层南北倾斜',
            type: 'line',
            stack: '6',
            //areaStyle: {normal: {}},
            data: this.b6/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name: '四层东西倾斜',
            type: 'line',
            stack: '7',
            //areaStyle: {normal: {}},
            data: this.b7/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '四层南北倾斜',
            type: 'line',
            stack: '8',
            //areaStyle: {normal: {}},
            data: this.b8/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name: '五层东西倾斜',
            type: 'line',
            stack: '9',
            //areaStyle: {normal: {}},
            data: this.b9/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '六层东西倾斜',

            type: 'line',
            stack: '10',
            //areaStyle: {normal: {}},
            data: this.b10/*[12, 7, 19, 11, 15, 25, 20]*/
          },
          {
            name: '七层东西倾斜',
            type: 'line',
            stack: '11',
            //areaStyle: {normal: {}},
            data: this.b11/*[8, 21, 7, 49, 4, 33, 41]*/
          },
          {
            name: '八层东西倾斜',
            type: 'line',
            stack: '12',
            //areaStyle: {normal: {}},
            data: this.b12/*[12, 7, 19, 11, 15, 25, 20]*/
          },
        ],
      };

      myChartI.setOption(option)
      window.addEventListener("resize",function(){
        myChartI.resize()
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
      #chart_i {
        width: 100%
        height: 350px
      }

      @media screen and (max-width: 900px) {
        #chart_i {
          height: 600px
          width: 100%
        }
      }
</style>

