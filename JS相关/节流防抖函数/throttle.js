/*
  节流函数封装 
  事件高频触发，则只有 !第一个！进入的事件有效。因为考虑定时器的存在，后续事件都会无效返回。
*/
export default function throttle(fn, delay=300) {
  let timer = null;//定时器

  //闭包？！
  return function(...args) {//返回主体函数
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);//业务函数
      timer = null;//运行后销毁该timer，不然会一直return
    }, delay)
  }
}
