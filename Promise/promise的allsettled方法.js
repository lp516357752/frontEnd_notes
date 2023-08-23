//建议放到浏览器执行
//allsettled方法才可以真正地等待并返回所有异步操作结果
var promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result1')
    },1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('result2')
    },5000)
  })
]
Promise.allSettled(promises).then(res => {
  console.log(res)
})