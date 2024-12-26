<template>
  <div id="app">
    <TopBar />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from './layout/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
