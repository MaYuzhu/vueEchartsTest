<template>
	<div class="content">
    <header>
      <img src="../../static/homeImage/铁路监测系统150_01.gif" alt="">
      <!--<p>
        <span>铁</span><span>路</span><span>客</span><span>站</span>
        <span>结</span><span>构</span><span>健</span><span>康</span>
        <span>检</span><span>测</span><span>平</span><span>台</span>
      </p>-->
      <p>1234567890</p>
    </header>
    <div class="content_wrap">
      <div class="left">
        <div class="left_top">
          <div></div>
          <ul>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
            <li><img src="../../static/homeImage/铁路监测系统150_06.gif" alt=""></li>
          </ul>
        </div>
        <div class="left_bottom"></div>
      </div>
      <div class="center">
        <div class="center_top"></div>
        <div class="center_bottom"></div>
      </div>
      <div class="right">
        <div class="right_top"></div>
        <div class="right_center"></div>
        <div class="right_bottom"></div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@font-face {
    font-family: 'Bungee Inline';
    font-style: normal;
    font-weight: 400;
    src: local('Bungee Inline'), local('BungeeInline-Regular'), url(https://fonts.gstatic.com/s/bungeeinline/v2/Tb-1914q4rFpjT-F66PLCfn8qdNnd5eCmWXua5W-n7c.woff) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
  }*/
  /*@font-face {
    font-family: '字体名';
    src: url('字体名.eot'); !* IE9 兼容模式 *!
    src: url('字体名.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *!
      url('字体名.woff') format('woff'), !* 现代浏览器 *!
      url('字体名.ttf')  format('truetype'), !* Safari, Android, iOS *!
      url('字体名.svg#grablau') format('svg'); !* Legacy iOS *!
  }*/

  /*h2{
    font-family: 'Bungee Inline';
    font-size 50px
  }
  p
    font-family:'DS-Digital'
    font-size 70px
    color red*/
  header
    position relative
    img
      width 100%
    p
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      font-family:'DS-Digital'
      font-size 70px
      color red
      span
        background: linear-gradient(to right, #ffffff, #fff,#bbb)
        -webkit-background-clip: text
        color: transparent
        font-size 31px
        font-weight 900

  .content_wrap
    display flex
    .left
      width 30%
      background lavenderblush
      .left_top
        width 100%
        display flex
        >div
          width 30px
          height 368px
          background-image url('../../static/homeImage/t150left.gif')
          background-size 100% 100%
        >ul
          background lightcoral
          width 420px
          display flex
          flex-wrap wrap
          align-content flex-end
          li
            width 50%
            height 92px
            margin 40px 0 0 0
            padding-right 10px
            img
              width 100%
    .center
      width 40%
      height 300px
      background lavender
    .right
      width 30%
      height 300px
      background lightblue
</style>
