new Promise((resolve,reject)=> {
  reject(3)
})
.then(res=> {
  console.log("resolve1："+res)//3
  //因为promise的特点：即时不返回，也会默认传递一个值为undefined的promise，状态为
  //resolved
  //利用这一个特点，返回一个处于pending状态的promise，中断promise链
  return new Promise(()=>{})
},rej=>{
  console.log("reject1："+rej)
})
.then(res=>{
  console.log("resolve2："+res)//undefined，如何终止这一个then以及之后的then的打印呢？
},rej=>{
  console.log("reject2："+rej)
}).catch(reason=>{//每一层若未捕获错误(没写onrejected回调)，错误会穿透到catch捕获
  console.log("reason："+reason)
})