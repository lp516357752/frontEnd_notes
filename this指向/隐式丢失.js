//对于隐式丢失，可以理解为，最终是谁去调用了该方法

//1、隐式丢失1
var a = 0;
function foo() {
  console.log(this.a);
}
var obj = {
  a: 1,
  foo: foo
}
var bar = obj.foo;
bar();//结果是0,因为bar此时相当于一个跟foo一样的函数


//2、隐式丢失2
//函数被当做参数传递，出现丢失
// var a = 0
// function foo(){
//   console.log(this.a)
// }
// function bar(fn){
//   fn()
// }
// var obj = {
//   a: 1,
//   foo: foo 
// }
// bar(obj.foo);//结果为0


//3、隐式丢失，内置函数
// setTimeout(function() {
//   console.log(this);
// },1000);//结果是window

//4、隐式丢失，间接调用
// var a = 2;
// function foo() {
//   console,length(this.a)
// }
// var obj = {
//   a: 3,
//   foo: foo
// }
// var p = {
//   a: 4,
//   b: 5
// }
// obj.foo();  //3
// //加入函数并立即调用
// (p.foo = obj.foo)() //结果为window
// //非立即调用
// p.foo = obj.foo;
// p.foo(); //结果为4


//5、隐式丢失，特殊情况
// var a =0;
// function foo() {
//   console.log(this.a)
// }
// var obj = {
//   a: 1,
//   f: foo
// }
// var cc;
// (cc = obj.f)() //0
// (false || obj.f)(); //0
// (1, obj.f)(); //0