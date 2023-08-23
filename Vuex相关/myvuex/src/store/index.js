import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import moduleA from './modules/moduleA'

//1、安装插件
Vue.use(Vuex)

//2、创建对象

const state = {//变量
  counter: 0,
  status: [
    {
      name: "廖鹏",
      age: 21
    },
    {
      name: "篝",
      age: 19
    }
  ]
}
const store = new Vuex.Store({
  //state中的变量属性也是响应式的，任何变化都会被侦测到，并让所有用到他们的地方进行刷新。
  //每个元素都被添加到响应式系统中,如status.name
  //每个变量里面的每个元素都有一个dep，每个dep都有多个watcher

  //这些的前提要求是，必须是已经定义好了的属性，而新添加的属性无法监测
  //如status[0].test = 0 是无法侦测到的。当可以通过7种响应式的数组方法以及vue.set()，vue.delete()等方法做到响应
  //但是最新版克服了以上问题
  state,
  mutations,//方法，需要通过commit。
  actions,/*mutation中，通过异步操作改变变量值时，devtool插件监听不到异步操作。所以不要在里面进行异步操作，而是使用action*/
  getters,//数据处理并返回，用法类似于computed，直接调用
  modules: {//子store
    a: moduleA,//子store会被放到全局state中
  }
})

//3、导出对象
export default store