//1、
let obj = {
  a: 222,
  fn: function() {
    console.log(this)//obj
    setTimeout(function(){console.log(this)})//window
  }
}
obj.fn();

//2、
var obj = {
  a: 222,
  fn: function() {
    console.log(this)//obj
    setTimeout(()=>{console.log(this)})//obj
  }
}
obj.fn();
//箭头函数没有自己的作用域，this。所以他会向上层找this的指向。
