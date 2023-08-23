<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
//这个文件的引用路径是通过在webpack.base.conf.js中配置extension的alias实现的
//cli3可以实现类似于 @/views 的写法
//非import引入时，如img标签的src，在使用该方法时必须在前面添加~波浪符
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'

export default {
  name:"MyTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  props: {},
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {},
};
</script>

<style scoped>
  .tab-bar-item:hover {
    background-color: black;
  }
</style>
