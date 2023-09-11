<template>
  <div class="title">
    {{message}}
    <button class="test" @click='clicked'>改变</button>
    <Cpn></Cpn>
  </div>
  
</template>
<script>
import Cpn from './Cpn'//此处一般需要写后缀，除非在config的resolve里面配置了extensions
export default {
  components: {
    Cpn
  },
  data(){
  return {
    message: "hello webpack",
  }
  },
  methods: {
    clicked() {
      this.message = '改变了'
    }
  }
}
</script>
<style lang="less" scoped>
  .title {
    color: blue;
    &.test {
      background-color: red;
    }
  }
</style>