<template>
  <div id="app">
    <h1>!--module子store的使用--</h1>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="reName">修改名字</button>
    <button @click="updateName">异步修改名字</button>
    <h2>{{$store.getters.getDate}}</h2>
    <hr>
    <h1>!--state的mutation的使用。直接需要调用commit进行调用--</h1>
    <h2>{{$store.state.counter}}</h2>
    <hello-vue-x></hello-vue-x>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount_payload(5)">+5</button>
    <button @click="reset">重置</button>
  <hr>
    <h1>!--state的getter的使用。直接调用函数--</h1>
    <h2>{{$store.getters.getAll}}</h2>
    <h2>{{$store.state.counter * $store.state.counter}}</h2>
    <h2>{{$store.getters.powCounter}}</h2>
    <h2>{{$store.getters.getOlder}}</h2>
    <h2>{{$store.getters.getOlderLength}}</h2>
    <h2>{{$store.getters.getItem(15)}}</h2>
    <button @click="addStatus">增加</button>
  </div>
</template>

<script>
import helloVueX from './components/helloVueX'
import {
  INCREMENT,
  RESET
} from './store/mutation_types'

export default {
  name: 'App',
  components: {
    helloVueX
  },
  data() {
    return {
      message: "廖鹏",
    }
  },
  methods: {
    add() {//使用commit调用mutations
      this.$store.commit(INCREMENT)//推荐。这里引用js文件保存的函数名，两边同时引用公共函数名，防止写错
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {//使用commit调用mutations
      this.$store.commit('incrementCount', count)
    },
    addStatus() {
      const item = {name: "测试", age: 11}
      this.$store.commit('addStatus' ,item)
    },
    addCount_payload(count) {//对象方式提交
      this.$store.commit({
        type: 'addCount_payload',
        count,
      })
    },
    // reset() {
    //   this.$store.dispatch(RESET, {
    //     message: "可以传递参数",
    //     success: () => {
    //       console.log("里面已经完成");
    //     }
    //   })
    // },
    reset() {//比上面更优雅的方式
    //实际这里dispatch是返回得到了一个Promise
      this.$store.dispatch(RESET, "可以传递参数").then(res => {
        console.log(res)
      })
    },
    reName() {
      this.$store.commit('reName', "李四")
    },
    updateName() {
      this.$store.dispatch('updateName')
    }
  },
}
</script>

<style>

</style>
