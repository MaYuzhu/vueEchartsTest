<template>
    <div class="wrap">
      <header>
        <div class="left">
          <img src="../../static/warningList/logo.png" alt="">
          <span>铁路客站结构健康监测平台</span>
        </div>
        <div class="right">
          <div>
            <img src="../../static/warningList/jingbao.png" alt="">
            <span class="count">2</span>
          </div>
          <div>
            <img src="../../static/warningList/yonghu.png" alt="">
            <span style="color:#91a6d2">admin123456</span>
          </div>
          <div>
            <router-link to="/">
              <img src="../../static/warningList/exit.png" alt="">
            </router-link>
          </div>
        </div>
      </header>
      <div class="content">
        <div style="width:96%;margin:8px auto">
          <div class="sousuo">
            <input type="text" placeholder="请输入站名,如'济南站'">
            <div class="sou">
              <img src="../../static/warningList/sou1.svg" alt="">
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th>序号</th>
            <th>监测区域</th>
            <th>预警原因</th>
            <th>预警处理</th>
            <th>预警时间</th>
          </tr>
          <tr>
            <td>1</td>
            <td>济南站XXX</td>
            <td>XXXs设备恢复接入数据，警报解除。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>2</td>
            <td>济南站XXX</td>
            <td>XXXs设备近三小时降雨量5.9mm,请关注</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>3</td>
            <td>济南站XXX</td>
            <td>XXXs设备近三小时降雨量5.9mm,请关注。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>4</td>
            <td>济南站XXX</td>
            <td>XXXs设备恢复借入数据，警报解除。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>1</td>
            <td>济南站XXX</td>
            <td>XXXs设备恢复接入数据，警报解除。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>2</td>
            <td>济南站XXX</td>
            <td>XXXs设备近三小时降雨量5.9mm,请关注</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>3</td>
            <td>济南站XXX</td>
            <td>XXXs设备近三小时降雨量5.9mm,请关注。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
          <tr>
            <td>4</td>
            <td>济南站XXX</td>
            <td>XXXs设备恢复借入数据，警报解除。</td>
            <td>未处理</td>
            <td>2018-7-31 15:49:22</td>
          </tr>
        </table>
        <div style="width:96%;margin:80px auto auto">
          <h2 style="float: right">当前第<span  style="color: red;font-size: 22px">{{current}}</span>页</h2>
          <div style="float: right">
            <pageIn2 :totalPages="totalPages" :current-page='current' @pagechangeOn="pagechangeOn"></pageIn2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import pageIn2 from '../components/pageIn2/pageIn2'
    export default {
      name: "warning-list",
      data(){
        return {
          total:50,
          totalPages: 40,     // 记录总条数
          display: 5,   // 每页显示条数
          current: 1,   // 当前的页数
        }},
      methods: {
        pagechange:function(currentPage){
          //console.log(currentPage);
          // ajax请求, 向后台发送 currentPage, 来获取对应的数据
          this.current = currentPage
          },
        pagechangeOn:function(c){
          this.current = c
          $.ajax({
            type: 'get',
            async: false,
            //data:{p:c},
            cache: true,//36.110.66.214:50001
            url: '/page',
            dataType: 'json',
            jsonp: "callback",
            success: function (json) {
              console.log(json)
            },
            error: function () {}
          })
        },
        },

      components: {
        pageIn2,
      },


    }
</script>

<style lang="stylus" scoped>
  .wrap
    width 100%
    min-width 1200px
    header
      width 100%
      height 50px
      margin 0 auto
      background #1753ab
      display flex
      justify-content space-between
      .left
        line-height 50px
        font-size 18px
        color #fff
        img
          margin -5px 8px 0 20px
      .right
        display flex
        line-height 46px
        >div
          margin 0 10px
          .count
            display block
            width 16px
            height 16px
            border-radius 50%
            background #f7931e
            color #fff
            line-height 15px
            font-size 12px
            text-align center
            transform scale(0.7) translate(5px,-51px)
        >:last-child
          margin-right 28px

    .content
      width 100%
      margin 0 auto
      padding-top 16px
      box-sizing border-box
      .sousuo
        width 164px
        height 20px
        border 1px solid #d9d9d9
        display flex
        input
          width 140px
          padding-left 10px
          border 0px
          outline none
        >div
          width 24px
          height 20px
          background #2d81f7
          line-height 17px
          text-align center
          transform translate(1px,-1px)
          img
            width 70%
            height 70%

      table
        width 96%
        border 1px solid #e0e0e0
        margin 0 auto
        th
          height 30px
          background #576cc4
          color #fff
        td
          height 36px
          color #333
        >:nth-child(2n+2)
          background #f8fdfe
        >:nth-child(2n+3)
          background #dde5f5
        >tr td:nth-child(3)
          text-align center


      .page
        float right
</style>
