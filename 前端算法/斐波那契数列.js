function fibonacci(count) {
  let fn = (count, cur=1, next=1)=>{
    if(count==0) {//从0开始
      return cur;
    }
    return fn(count-1, next, cur+next)
  }
  return fn(count)
}
console.log(fibonacci(5))