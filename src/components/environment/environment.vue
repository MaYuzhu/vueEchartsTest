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
    <span style="font-size:18px;font-weight:bold">{{username}}</span>
    <testEmit @_setuser="getuser"></testEmit>
    <div class="bg">{{optionV}}</div>
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
        }
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
        for(let a = 0;a<this.devOption.length;a++){

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
            var data = JSON.parse(json)
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
                  icon:'rect'
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
                  //type : 'category',
                  type:'value',
                  //boundaryGap : false,
                  data : data.data.x
                }
              ],
              yAxis : [
                {
                  position:'right',
                  type : 'category',
                  //type : 'value',
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
                  //type:'line',
                  type:'bar',
                  barWidth: 10,
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
  .bg
    width 300px
    height 200px
    background-image url("../../../static/imgs/arrows.png")
    background-size 100% auto

</style>
