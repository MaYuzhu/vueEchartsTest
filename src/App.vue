<template>
  <div id="app">

    <Title v-show="$route.meta.showHeader"></Title>
    <Nav v-show="$route.meta.showHeader"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Title from './components/title/title'
  import Nav from './components/nav/nav'

export default {
  name: 'App',
  components:{
    Title,
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
