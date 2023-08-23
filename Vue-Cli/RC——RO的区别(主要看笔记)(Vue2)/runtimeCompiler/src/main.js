// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: `<div>{{test}}</div>`,
  data() {
    return {
      test: '组件'
    }
  },
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    cpn
  },
  render: //h => h(App)
  //上函数作用等同于如下
  //即createElement=h函数
  //createElement(标签，标签属性，内容)
  //1、基础用法
  // function(createElement){
  //   return createElement('h2', {class:'box'}, 
  //   ['测试',createElement('button',['按钮'])])
  // }
  //2、传入组件h
  function(h){
    return h(cpn)
  }
})
