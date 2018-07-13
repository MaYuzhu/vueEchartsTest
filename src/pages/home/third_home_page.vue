<template>
  <div>
    <!-- 站名  -->
    <div class="container-fluid">
      <div class="container zhan_name">
        <p>济南站</p>
      </div>
    </div>
    <!-- 页面主要内容 -->
    <div class="container sanji_container">
      <div class="row">
        <!-- 左 -->
        <div class="left_sanji col-md-8" id="app">
          <div class="imgs">
            <img class="img_1" src="../../../static/imgs/u9.png" alt="" display="none">
            <img class="img_2" src="../../../static/imgs/u31.png" alt="">
            <img class="img_3" src="../../../static/imgs/u33.png" alt="">
          </div>
          <div class="buttons">
            <button class="button_01" id="button_01"><img class="img-responsive" src="../../../static/imgs/u90.png" alt=""></button>
            <button class="button_02" id="button_02"><img class="img-responsive" src="../../../static/imgs/u88.png" alt=""></button>
            <button class="button_03" id="button_03"><img class="img-responsive" src="../../../static/imgs/u33.png" alt=""></button>
          </div>
        </div>
        <!-- 右 -->
        <div class="right_sanji col-md-4">
          <!-- 仪表盘 -->
          <div class="gauge_third_home_page">
            <Dashboard id="main_1" text_name="总体健康状况"></Dashboard>
            <Dashboard id="main_01" text_name="设备运行状态"></Dashboard>
          </div>
          <!-- 结构分析 -->
          <div class="table_third_home_page table_01">
            <Structure></Structure>
          </div>
          <!-- 外部环境 -->
          <div class="table_third_home_page table_01">
            <Environment></Environment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dashboard from '../../components/dashboard/dashboard'
  import Structure from '../../components/structure/structure'
  import Environment from '../../components/environment/environment'
    export default {
      name: "third_home_page",
      components:{
        Dashboard,
        Structure,
        Environment
      },
      mounted(){
        $(document).ready(function(){
          $("#button_02").click(function(){
            $(".img_2").css('display','block');
            $(".img_1").css('display','none');
            $(".img_3").css('display','none');
          });
          $("#button_01").click(function(){
            $(".img_2").css('display','none');
            $(".img_1").css('display','block');
            $(".img_3").css('display','none');
          });
          $("#button_03").click(function(){
            $(".img_2").css('display','none');
            $(".img_1").css('display','none');
            $(".img_3").css('display','block');
          });
        });
      },
    }
</script>

<style lang="stylus" scoped>

</style>
