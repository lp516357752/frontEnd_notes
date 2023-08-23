import {
  RESET
} from './mutation_types'
export default {
  //context,上下文

    // [RESET](context, payload) {
    //   setTimeout(() => {
    //     context.commit(RESET);
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // },

    //比上面更优雅的方式
    [RESET](context, payload) {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          context.commit(RESET);
          console.log(payload);
          resolve("成功回调")
        }, 1000);
      })
    },
}