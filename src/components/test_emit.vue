<template>
    <div>
      <form action="">
        <input type="text" v-model="username" @keyup="setuser">
      </form>

    </div>
</template>

<script>
    export default {
      name: "test_emit",
      data(){
        return{
          username:'123'
        }
      },
      mounted(){

      },
      methods:{
        setuser(){
          this.$emit('_setuser',this.username)
        },

      },
    }
</script>

<style lang="stylus" scoped>

</style>
