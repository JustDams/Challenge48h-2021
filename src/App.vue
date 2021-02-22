<template>
  <div id="app">
    <ImageComponent     />
  </div>
</template>

<script>

import ImageComponent from './components/ImageComponent.vue'

export default {
  name: 'App',
  components: {
    ImageComponent
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
