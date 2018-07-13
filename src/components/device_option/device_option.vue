<template>
  <div class="option_wrap">
    <span>设备：</span>
    <select id="pid" @change="gradeChange()">
      <option value ="all">全部</option>
      <option :value ="index" v-for="(item,index) in deviceName" :key="index">{{item}}</option>

    </select>
    <span>方向：</span>
    <select>
      <option value ="all">全部</option>
      <option value ="ew">东西</option>
      <option value="sn">南北</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "device_option",
    data(){
      return{
        optionValue:'all'
      }
    },
    props:{
      deviceName:{
        type:Array
      }
    },
    methods:{
      gradeChange(){
        var objS = document.getElementById("pid")
        var grade = objS.options[objS.selectedIndex].value
        //alert(grade)
        this.optionValue = grade
        this.$emit('_option', this.optionValue)
      }
    },
    mounted(){

    },
  }
</script>

<style lang="stylus" scoped>
  .option_wrap
    font-size 16px
    font-weight 700
    margin  10px 0 2px 50px
    /*position relative
    z-index 99*/
    span
      margin-left 20px
    select
      font-size 16px
      font-weight 500
</style>
