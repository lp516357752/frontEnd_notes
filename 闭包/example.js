//1、典型闭包用法，可以防止污染全局变量
// const add = (
//   function (){
//     var counter = 0;
//     return function() {
//       return ++counter;
//     }
//   }
// )();
// console.log(add);
// console.log(add());//此后每次调用add()，其入口都是第5行的函数
// console.log(add());

//2、闭包与循环
//提出问题：
// function foo() {
//   for (var i=0; i<5; i++){
//     setTimeout(() => {
//       console.log(i);
//     },1000)
//   }
// }
// foo()

//解决问题：
function foo() {
  var arr = []
  for (var i=0; i<5; i++){
    (function(i) //外部函数，只有函数才能生成作用域
    {
      setTimeout(function (){
        console.log(i);//内部函数引用了外部函数的变量i，而且直到时间结束，都一直引用着
      }, 1000)
    })(i);//传入i的值

    
  }
}
foo()


