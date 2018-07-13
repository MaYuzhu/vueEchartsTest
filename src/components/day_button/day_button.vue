<template>
  <div class="button_wrap">
    <div :class="{on:isOn === 0}" @click="isChange(0)">日</div>
    <div :class="{on:isOn === 1}" @click="isChange(1)">周</div>
    <div :class="{on:isOn === 2}" @click="isChange(2)">月</div>
    <div>实时</div>
  </div>
</template>

<script>
    export default {
      name: "day_button",
      data(){
        return{
          isOn : 0,
        }
      },
      methods:{
        isChange(num){
          this.isOn = num
          this.$emit('_day',this.isOn)
        },
      },
    }
</script>

<style lang="stylus" scoped>
  .button_wrap
    display flex
    div
      border 1px solid transparent
      padding 5px 6px
      margin 4px
      border-radius 3px
      cursor pointer
      font-size 16px
    :last-child
      background #70BB3D
      color #fff
      padding 5px 12px
      margin 4px 0 4px 16px
    .on
      border 1px solid #70BB3D
</style>
