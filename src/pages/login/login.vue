<template>
  <div>

    <div class="container-fluid home_page_header">
      <div class="container pp">
        <div class="row">
          <div class="col-md-6 sm_logo">
            <img src="../../../static/imgs/logo.png" alt="">
            <span class="logo_span">铁路客站结构健康监测平台</span>
          </div>
          <!-- <div class="col-md-6 name">
            <p>
              <a href="#">用户名：admin</a>
              <a href="#" class="zhuxiao">注销</a>
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container-fluid main">
      <div class="img_bg">
        <img src="../../../static/imgs/login bg.png" alt="bg">
        <!-- 登录框整体部分 -->
        <div class="content">
          <!-- 登录框的页头 -->
          <div class="login_header"></div>
          <!-- 登录框主体 -->
          <section>
            <form action="" method="post" id="J_form">
              <!-- 错误信息提示框 -->
              <!-- <div id="J_Message" class="login_msg error">
                <p class="error">账号或密码错误</p>
              </div> -->
              <!-- 账户 -->
              <div class="field username_field">
                <label for="username">账户</label>
                <input type="text" name="username_1" id="username" class="username_01" />
              </div>
              <!-- 密码 -->
              <div class="field password_field">
                <label for="password">密码</label>
                <input type="password" name="password_1" id="password" class="password_01"/>
              </div>
              <!-- 自动登录 -->
              <div class="auto_login">
                <input class="input2" type="checkbox" id="auto">
                <label for="auto">自动登录</label>
                <span>账号或密码错误</span>
              </div>
              <!-- 登录按钮 -->
              <button type="button" @click="btnonclick()">登&nbsp;&nbsp;录</button>
              <footer>
                <a href="#">忘记密码?</a>
              </footer>
            </form>
          </section>
        </div>
      </div>
    </div>
    <AlertTip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default {
    name: "login",
    data(){
      return{
        alertText: '', // 提示框文本
        alertShow: false, //是否显示提示框
      }
    },
    components:{
      AlertTip,
    },
    methods:{
      btnonclick(){
        var input_zhi  = $("#username").val()
        //alert(input_zhi);
        if(input_zhi=="admin"){
          window.location.href='/thirdHomePage';
        }else if(input_zhi=="xinxi"){
          window.location.href="/secondHomePage";
        }else if(input_zhi==""){
          //alert("请输入用户名！");
          this.alertShow = true
          this.alertText = '请输入用户名！'
        }
        else{
          //alert("您输入的用户名不存在！");
          this.alertShow = true
          this.alertText = '您输入的用户名不存在！'
        }
      },
      // 关闭提示框
      closeTip () {
        this.alertShow = false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .home_page_header
    height 89px
    .logo_span
      font-size 24px
</style>
