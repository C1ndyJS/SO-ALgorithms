<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <ScanChart :requests="requests" :start="start" :direction="direction" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ScanChart from './components/ScanChart.vue';

export default {
  name: 'App',
  components: { 
    ScanChart
  },
  data() {
    return {
      requests: [98, 183, 37, 122, 14, 124, 65, 67],
      start: 53,
      direction: 'right'
    };
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
  margin-top: 60px;
}
</style>
