//严格模式下，this默认指向undefined

//1、
function foo() {
  "use strict"
  console.log(this);//严格模式为undefined
}
foo();

//2、
var color = 'red';
function show() {
  "use strict"
  console.log(this);
}
show.call(null);//null
show.apply(undefined);//undefined
show.call(window);//window
