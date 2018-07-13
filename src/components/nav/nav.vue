<template>
  <div class="home_page_nav container-fluid">
    <div class="container">
      <nav class="navbar navbar-default">

        <!--  移动端导航 -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li :class="{active:isCurrent('/thirdHomePage')}"><router-link to="/thirdHomePage" class="shouye">首页</router-link></li>
            <li :class="{active:isCurrent('/monitoring_data')}"><router-link to="/monitoring_data">监测数据<span class="sr-only">(current)</span></router-link></li>
            <li :class="{active:isCurrent('/data_early_warning')}"><router-link to="/data_early_warning">数据预警</router-link></li>
            <li :class="{active:isCurrent('/device_manage')}"><router-link to="/device_manage">设备管理</router-link></li>
            <li :class="{active:isCurrent('/jiegou_fenxi')}"><router-link to="/jiegou_fenxi">结构分析</router-link></li>
            <li  class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                监测报告
              </a>
              <ul class="dropdown-menu">
                <li><a href="shengcheng_baogao.html">生成报告</a></li>
                <!-- <li role="separator" class="divider"></li> -->
                <li><a href="shuju_daochu.html">数据导出</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                综合管理
              </a>
              <ul class="dropdown-menu">
                <li><a href="dx_manage.html">对象管理</a></li>
                <li><a href="early_warning_push.html">预警推送</a></li>
                <li><a href="import.html">数据导入</a></li>
                <!-- <li role="separator" class="divider"></li> -->
                <li><a href="threshold_value.html">阈值设置</a></li>
                <!-- <li role="separator" class="divider"></li> -->
                <li><a href="permission.html">权限管理</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
     export default {
      name: "navTop",
      methods:{
        isCurrent(path){
          return this.$route.path.search(path) >= 0
        },
      },
    }
</script>

<style lang="stylus" scoped>
  .home_page_nav
    background-color: #f3f3f3;
    box-shadow: 0 2px 8px rgba(0,0,0,.06);
    nav
      font-size:13px;
      margin-left:-15px;

    .dropdown-menu
      font-size:12px;
      li
        a
          background: url(../../../static/imgs/sprit00.png) no-repeat 4px 3px;

  .dropdown-toggle
    background: url(../../../static/imgs/sprit00.png) no-repeat 70px -95px;
  .collapse
    padding-left:0;

  /*.shouye

    padding-left: 0;*/
  .active
    color:#66bb46;

</style>
