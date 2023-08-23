<template>
  <div>
    <h2>这是主页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/text">文本</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"home",
  components: {},
  props: {},
  data() {
    return {
      path: "",
    };
  },
  methods: {

  },
  computed: {

  },
  created() {
    console.log("home创建了");
    
  },
  destroyed() {
    console.log("home销毁了");
    
  },
  //以下实现回到原路由后，保留原路由的状态
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path;
    next()
  },
  activated() {//配合keepalive
    this.$router.push(this.path).catch(err=>err)
    
  }
};

</script>

<style scoped>

</style>
