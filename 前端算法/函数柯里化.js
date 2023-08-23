//加法器柯里化
function adderCurry(...args) {
  //var args = Array.prototype.slice.call(arguments);
  var argStore = [...args];
  var adder = function() {
    argStore.push(...arguments)
    return adder;
  }
  adder.toString = function() {
    return argStore.reduce((sum,i)=>sum+i)
  }
  return adder;
}
console.log(adderCurry(1,4)(2)(3))
// function curry(fn, curArgs) {//curArgs准备存放参数列表
//   return function () {
//     //将伪数组arguments数组化
//     //arguments是每个括号中的参数
//     let args = Array.prototype.slice.call(arguments);
//     //curArgs是上次递归返回的已存储的参数列表
//     //即args = curArgs
//     if(curArgs!==undefined) {
//       args = args.concat(curArgs);
//     }
  
//     if(args.length<fn.length) {//如果当前已经存储的参数数量 小于 目标函数参数长度
//       return curry(fn, args)//递归调用
//     }
//     return fn.apply(null,args)
//   }
// }

// function sum (a,b,c) {
//   console.log(a+b+c)
// }
// var foo = curry(sum)
// foo(1)(2)(3)
