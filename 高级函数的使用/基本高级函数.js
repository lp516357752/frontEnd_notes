var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var obj = {
  index: 1
}

var b = arr.map(function(value){//最后一个参数是传入函数中的this所指向对象
  return value+this.index;
},obj)

//var c = arr.fill(10, 0, arr.length)//其实是替换,会修改原数组

var d = arr.filter(function(value){//类似于map
  return value>this.index? true:false;
}, obj)

var e = arr.reduce(function(pre, cur, curindex, arr){
  return pre+cur;
},obj.index)

var f = arr.sort(function(a, b){//返回对原数组的引用，所以会修改原数组
  if(a<b) return 1;//大于0对调，小于或等于则不变
})

console.log(f)