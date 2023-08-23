const moduleA = {//其中的一些函数、变量名最好不要相同，因为会被合并到全局store中
  state: {
    name: "张三"
  },
  mutations: {
    reName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    //此处的context专属于该模块，不属于全局。那么用context在获取、提交操作时，仅可以访问模块的内容
    updateName(context) {
      setTimeout(() =>  {
        context.commit('reName', "王五")
      }, 1000)
    },
    //对象解构，同等于上述代码。可以取出自己需要的成员变量
    // updateName(state, commit, rootState) {
      
    // },
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getDate(state, getters, rootState){
      return getters.getName + rootState.counter
    }
  },
  modules: {}
}