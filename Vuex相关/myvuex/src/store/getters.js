export default {
  getAll(state){
    return state.status;
  },
  powCounter(state) {
    return state.counter*state.counter;
  },
  getOlder(state) {
    return state.status.filter(item => item.age>20)
  },
  getOlderLength(state, getters) {
    return getters.getOlder.length//调用本身的函数
  },
  getItem(state) {//如果需要传参时，这样写
    return age => {//返回一个带参函数给外部，这样外部就可以输入参数了
      return state.status.filter(item => item.age>age)
    }
  }
}