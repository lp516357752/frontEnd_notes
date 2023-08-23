//发现js文件不需要加js后缀，css文件却需要
import {name} from "./js/info"//es6的模块化
const {add}  = require('./js/tool')//commenJS的模块化

console.log(add(1,2));
console.log(name)


require("./css/normal.css")//引用css模块测试
require("./css/special.less")//引用less文件模块
