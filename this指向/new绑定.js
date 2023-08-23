//1、
// function fn() {
//   console.log('this is', this)
// }
// var a = fn();//打印的是window
// a;
// var b = new fn();//打印的是fn
// var c = b;

//2、
// function fn2() {
//   console.log(this);//打印fn2
//   return {name: 'xxx'}
// }
// var fnn2 = new fn2();
// fnn2;
// console.log(fnn2);//打印{name: 'xxx'}

//3、
//此处是将fav这个函数作为构造函数赋给了p，所以p是该构造函数的一个实例

// var person = {
//   fav: function() {
//     console.log('this is', this);
//     return this;//在此处等于return;
//   }
// }
// var p = new person.fav(); //this is fav{}
// console.log(p, p===person); //false
// console.log(p.constructor === person.fav);//true
