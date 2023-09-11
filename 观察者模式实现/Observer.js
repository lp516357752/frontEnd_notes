'use strict'
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});//对数据注册劫持

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());//每次修改值则执行一次函数
  return result;//严格模式下必须要返回true
}


const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '王五';
// 输出
// 李四, 20




var n=100;
function foo1() {
  console.log(n)
}
function foo2() {
  var n=200;
  console.log(n);
  foo1()
}
foo2();
console.log(n);