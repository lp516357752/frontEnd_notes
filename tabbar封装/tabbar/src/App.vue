<template>
  <div id="app">
    <router-view></router-view>
    <my-tab-bar/>
  </div>
</template>

<script>

import MyTabBar from 'components/tabbar/MyTabBar'
export default {
  name: 'App',
  components: {
    MyTabBar
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
  @import url("./assets/css/base");
  
</style>
