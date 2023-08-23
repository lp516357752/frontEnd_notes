<template>
  <div id="app">
    <h3>测试1</h3>
    <!--设置组件，默认渲染为a-->

    <!--设置浏览器跳转方式replace为replaceState，用户无法通过后退键返回前一页-->
    <!--设置tag，指定渲染为button标签-->
    <!--标签设置路由活跃状态active的class-->
    <router-link to="/home" replace active-class="active">主页</router-link>
    <!--动态路由(重要),注意用到v-bind，因为是属性中动态绑定数据-->
    <router-link :to="'/user/'+user">用户</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>


    <!--query方式组件间传递数据，类似于上面的:to="'/user/'+user"的功能
    一般适用于传入大量数据-->
    <router-link :to="{path: '/profile', query: {name: user}}">档案</router-link>
    

    <!-- 路由设置active属性 -->
    <!--如当前路由匹配成功时，自动给当前元素添加一个router-link-active的class，可以修改默认名-->
    <!-- <router-link to="/home" replace active-class="active">主页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    
    <!-- 手动按钮跳转 -->
    <br>
    <!--
    <button @click="homeClick">首页按钮</button>
    <button @click="aboutClick">关于按钮</button> -->
    <button @click="profileClicked">档案</button>

    <h2>测试2</h2>
    <!--使actived和deactivated函数有效-->
    <keep-alive exclude="about,profile"><!--顾名思义，该属性用于设置不被加入缓存的组件-->
      <!--设置组件的渲染位置，占位，切换路由时，改变的是这里-->
      <router-view/>
    </keep-alive>
    
    <h2>这是params内容：{{this.$route.params.uid}}</h2>
    <h2>这是query内容：{{this.$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: '廖鹏'
    }
  },
  methods: {
    //通过手动跳转路由，实现router-link的to
    homeClick() {
      //history.pushState('/home')//不推荐跳过vue-router使用该方法
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.replace('/about')
    },
    profileClicked() {
      this.$router.push({
        path: '/profile',//需要传递参数时写成对象形式，否则同上
        query: {
          name: 'LIAOPENG'
        }
      })
    }

  },
  computed: {
    userid() {
      //获取当前路由对象的信息,userid与router/index.js文件中配置路由时path中的:user对应
      //注意是route，代表着当前活跃着的路由
      //而router代表着的是router文件中的index.js的路由对象
      return this.$route.params.uid
    }
  }
}
</script>
  
<style>
  .active{
    color: red;
  }
</style>
