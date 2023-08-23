//发现js文件不需要加js后缀，css文件却需要
//1、//es6的模块化
import {name} from "./js/info"
//commenJS的模块化

const {add}  = require('./js/tool')
console.log(add(1,2));
console.log(name)

//2、引用css模块测试
require("./css/normal.css")


//3、引用less文件模块
require("./css/special.less")

//4、添加vue开发
//注意，因为id的获取需要这个id对应的element已经被渲染，那么需要html把script标签放在最后才能获得到id。
import Vue from 'vue'
import app from './vue/app.vue'

const vm = new Vue({
  el: '#app',
  //当el与template共存时，vue会默认把 所有template里面的东西 替换掉 与el中id对应的元素
  template: '<app/>',
  components: {
    app
  }
})
