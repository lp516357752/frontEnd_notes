//1、显示绑定，call、apply和bind
//这三种方式中，this的指向取决于其第一个参数，当为null或undefined时，指向window
// var a = 0;
// function foo() {
//   console.log(this.a)
// }
// var obj = {
//   a: 2,
// }
// var obj2 = {
//   a: 222,
// }
// foo();//0
// //call能调用另一个对象的方法
// foo.call(obj);//2
// foo.call(obj2);//222
// //apply类似于call
// foo.apply(obj);//2
// //bind类似于上面两个，只是有个返回值
// var fn = foo.bind(obj2);
// fn(); //222



//2、硬绑定
// var a = 0;
// function foo() {
//   console.log(this.a);
// }
// var obj = {
//   a: 2,
// }
// var bar = function() {
//   foo.call(obj);
// }
// bar(); //2
// setTimeout(bar, 1);//2
// bar.call(window); //2
// var cc = bar.bind(window);
// cc(); //2

//3、foreach
var id = 'test'
function fn(el, i, x) {
  console.log(el, i, x, this.id);
}
var obj = {id: 'fn'}
var arr = [6, 66, 666]
//foreach一个参数是回调函数,没有第二个参数时会传入undefined
arr.forEach(fn);//在html文件里打印时，此处的字符串应是'test'
arr.forEach(fn, obj);//将fn插入到obj中
