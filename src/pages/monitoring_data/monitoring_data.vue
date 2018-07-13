<template>
  <div>
    <div class="container-fluid monitoring_data">
      <div class="container">

          <div class="col-md-3  siderbar">
            <div>
              <p class="p_head">监测目标</p>
            </div>
            <!-- <button class="btn" type="button" data-toggle="collapse" data-target="#d1" aria-expanded="false" aria-controls="collapseExample">
            站房整体变形监测
            </button> -->
            <a class="btn1" role="button" data-toggle="collapse" href="#d1" aria-expanded="false" aria-controls="d1">站房整体变形监测<span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span></a>
            <div class="collapse in" id="d1">
              <ul>
                <li><a href="#">横梁</a></li>
                <li><a href="#">柱子</a></li>
                <li><a href="#">屋盖</a></li>
              </ul>
            </div>
            <a class="btn1" role="button" data-toggle="collapse" href="#d2" aria-expanded="false" aria-controls="d2">承轨层监测<span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span></a>
            <div class="collapse" id="d2">
              <ul>
                <li><a href="#">项目1.1</a></li>
                <li><a href="#">项目1.2</a></li>
                <li><a href="#">项目1.3</a></li>
              </ul>
            </div>
            <a class="btn1" role="button" data-toggle="collapse" href="#d3" aria-expanded="false" aria-controls="d3">候车层与地下层<span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span></a>
            <div class="collapse" id="d3">
              <ul>
                <li><a href="#">横梁</a></li>
                <li><a href="#">柱子</a></li>
              </ul>
            </div>
            <a class="btn1" role="button" data-toggle="collapse" href="#d4" aria-expanded="false" aria-controls="d4">微环境监测<span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span></a>
            <div class="collapse" id="d4">
              <ul>
                <li><a href="#">降水量</a></li>
                <li><a href="#">室内外气温</a></li>
                <li><a href="#">噪声监测</a></li>
                <li><a href="#">空气质量</a></li>
              </ul>
            </div>
            <a class="btn1" role="button" data-toggle="collapse" href="#d5" aria-expanded="false" aria-controls="d5">雨棚监测<span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span><span><img class="sanjiao" src="../../../static/imgs/top.png" alt=""></span></a>
            <div class="collapse" id="d5">
              <ul>
                <li><a href="#">降水量</a></li>
                <li><a href="#">室内外气温</a></li>
                <li><a href="#">噪声监测</a></li>
                <li><a href="#">空气质量</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-9  index">
            <MMessage></MMessage>

            <div>
              <!--<img src="../../../static/imgs/_03.png" alt="" class="img-responsive">-->
              <Accelerometer>
                <span slot="title">加速度计</span>
                <span slot="text">{{text}}</span>

              </Accelerometer>
              <Windmeter v-bind:a="a" v-bind:b="b" v-bind:c="c">
                <span slot="title">风力计</span>
                <!--<span slot="text"></span>-->
                <!--<div slot="chart01"></div>-->
              </Windmeter>
              <Thermometer v-bind:a="a" v-bind:b="b" v-bind:c="c">
                <span slot="title">温度计</span>
                <!--<span slot="text"></span>-->
                <!--<div slot="chart01"></div>-->
              </Thermometer>
              <!--<Windmeter  v-bind:a="a" v-bind:b="b" v-bind:c="c"></Windmeter>-->
              <Inclinometer v-bind:a="a1"
                            v-bind:b1="b1" v-bind:b2="b2"
                            v-bind:b3="b3" v-bind:b4="b4"
                            v-bind:b5="b5" v-bind:b6="b6"
                            v-bind:b7="b7" v-bind:b8="b8"
                            v-bind:b9="b9" v-bind:b10="b10"
                            v-bind:b11="b11" v-bind:b12="b12">
                <span slot="title">倾角计</span>
                <!--<span slot="text"></span>-->
                <!--<div slot="chart01"></div>-->
              </Inclinometer>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import MMessage from '../../components/m_message/m_message'
  import Accelerometer from '../../components/accelerometer/accelerometer'
  import Windmeter from '../../components/windmeter/windmeter'
  import Thermometer from '../../components/thermometer/thermometer'
  import Inclinometer from '../../components/inclinometer/inclinometer'

    export default {
      name: "monitoring_data",
      components:{
        MMessage,
        Accelerometer,
        Windmeter,
        Thermometer,
        Inclinometer
      },
      data(){
        return{
          text:'加载中...',
          a:['2018.3.1','2018.3.2','2018.3.3','2018.3.4','2018.3.5','2018.3.6','2018.3.7'],
          b:[8, 21, 7, 49, 4, 33, 41],
          c:[12, 7, 19, 11, 15, 25, 20],
          a1:['8.3.1','8.3.2','8.3.3','8.3.4','8.3.5','8.3.6','8.3.7'],
          b1:[-0.005, -0.002, -0.007, -0.0025, -0.004, -0.0010, -0.0021],
          b2:[0.007, 0.005, 0.0027, 0.0025, 0.0047, 0.0045, 0.0044],
          b3:[0.002, 0.002, 0.0055, 0.00425, 0.0014, 0.0027, 0.0020],
          b4:[0.004, 0.003, 0.0017, 0.0035, 0.0012, 0.0018, 0.0049],
          b5:[0.005, 0.002, 0.0044, 0.0021, 0.0064, 0.0045, 0.0027],
          b6:[0.005, 0.004, 0.0020, 0.0033, 0.0044, 0.0057, 0.0057],
          b7:[-0.003, -0.004, -0.0017, -0.0047, -0.0044, -0.0019, -0.0035],
          b8:[0.005, 0.003, 0.0044, 0.0059, 0.0054, 0.0066, 0.0029],
          b9:[0.005, 0.001, 0.0055, 0.0010, 0.0024, 0.0035, 0.0035],
          b10:[0.005, 0.006, 0.0077, 0.0025, 0.0056, 0.0045, 0.0057],
          b11:[0.005, 0.007, 0.0087, 0.00145, 0.0044, 0.0012, 0.0030],
          b12:[0.005, 0.005, 0.0047, 0.0025, 0.0051, 0.0019, 0.0024],

        }
      },
      mounted(){
        setTimeout(()=>{
          this.text = '如图所示'
        },2000)

      },
    }
</script>

<style lang="stylus" scoped>


</style>
