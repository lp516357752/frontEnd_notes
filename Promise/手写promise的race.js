Promise.prototype.race = function(promises) {
  return new Promise((resolve,reject)=>{
    for(item of promises) {
      //由于同步循环代码执行得很快
      //给每一个promise都设置成得到结果就返回主体即可
      Promise.resolve(item).then((value)=>{
        resolve(value)
      },reason=>{
        reject(reason)
      })
    }
  })
}
