/*
  防抖函数封装 
  在一定时间内，只会触发一次请求函数。多次触发事件都会重新刷新计时器。只有不再接收到事件超过delay，计时器
  延时结束后才会执行函数。即只有！最后一个！事件才有效
*/
export default function debounce(fn, delay=300) {//包装函数
  let timer = null;//定时器，闭包

  return function(...args) {//返回主体函数
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args);//业务函数
    }, delay)
  }
}
