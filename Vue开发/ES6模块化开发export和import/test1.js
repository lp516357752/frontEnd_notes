let name = "廖鹏"
let num = 20
let flag = true

function print() {
  if(flag) {
    console.log("这是" + name);
  }
}

//方式一：导出普通变量
export {
  flag,
  print
}

//方式二：导出function或者class
export var infor = "要导出去东西";
export class Person{
  run(){
    console.log("测试"); 
  }
}

//三：
const message = "hello";
export default message//default默认只能导出一个
//其他地方import时，可以用自定义命名，而不用必须是message，导入的内容默认为这边的export default内容

//四、全部导入
//import * as info from "test1.js"