<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 设置不同状态的图片 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--显示内容-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabbarItem",
  components: {},
  props: {
    path: String,//传入该按钮对应的路由
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    itemClick() {     
      //name——params 
      //path——query
      this.$router.replace({path:this.path,
                            query:{name:"廖鹏"}}).catch(err => err);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1//判断当前路由是否与当前按钮一致
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
};
</script>

<style scoped>
  .tab-bar-item {
    flex: auto;
    text-align: center;
    height: 49px;/*tabbar的常用高度 */
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
    
  }
  
</style>
