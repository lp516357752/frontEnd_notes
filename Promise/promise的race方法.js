//只返回最先完成的promise实例结果，无论fullfilled还是rejected
var promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result1')
    },1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result2')
    },5000)
  })
]
Promise.race(promises).then(res => {
  console.log(res)
})
