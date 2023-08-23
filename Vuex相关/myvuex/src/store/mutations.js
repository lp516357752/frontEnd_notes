import {
  INCREMENT,
  RESET
} from './mutation_types'

export default {
  [INCREMENT](state) {//推荐。这里引用js文件保存的函数名，两边同时引用公共函数名，防止写错
    state.counter ++;
  },
  [RESET](state) {
    state.counter = 0;
  },
  decrement(state) {
    state.counter--;
  },
  incrementCount(state, count) {
    state.counter +=count;
  },
  addCount_payload(state, payload) {//对象提交方式，获得的是对象
    state.counter += payload.count;
  },
  addStatus(state, item){
    //payload，负载，携带东西
    state.status.push(item);
    console.log(state.status);
  },
}