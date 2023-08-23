import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//配置全局参数配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

//1、基本使用：
// axios({
//   url: '/home/multidata',
//   params: {//对应接口提供的参数

//   },
// }).then(res => {
//   console.log(res);
  
// })

//2、并发请求

// axios.all(
//   [
//     axios({
//       url: '',
//     }), 
//     axios({
//       url: '',
      
//     })
//   ].then(res => {
//     console.log(res);//得到一个数组    
//   })
// )
// axios.all(
//   [
//     axios({
//       url: '',
//     }), 
//     axios({
//       url: '',
//     })
//   ].then(axios.spread((res1, res2)=>{
//     console.log(res1);
//     console.log(res2)
//   })
//   )
// )

//建议配置实例模式(示例)
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://111.222.333.4444:8000',
//   timeout: 5000
// })
// instance2({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/request';
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// import {request} from './network/request';
// request({
//   url: '/home/multidata'
// }, res=>{
//   console.log(res);//成功回调函数
// }, err=>{
// console.log(err);//失败回调函数
// })