<template>
  <div class="button_wrap">
    <div :class="{on:isOn === 0}" @click="isChange(0)">日</div>
    <div :class="{on:isOn === 1}" @click="isChange(1)">周</div>
    <div :class="{on:isOn === 2}" @click="isChange(2)">月</div>
  </div>
</template>

<script>
  export default {
    name: "day_button2",
    data(){
      return{
        isOn : 0
      }
    },
    methods:{
      isChange(num){
        this.isOn = num

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
      margin 4px 16px
      border-radius 3px
      cursor pointer
      font-size 16px
      font-weight 600
    .on
      background  #70BB3D
      color:#fff
</style>
