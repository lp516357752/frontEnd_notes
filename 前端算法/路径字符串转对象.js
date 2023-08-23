let path = [
  '/a/b',
  '/a/c/2',
  '/a/c/3',
  '/d'
]
var res = {};
for(let i=0;i<path.length;i++) {
  var item = path[i].split('/').slice(1);
  res = parse(item,res)
  
}
console.log(res)
function parse(obj,res) {
  if(obj.length<=0) {
    return {};
  }
  var node = obj.shift();
  if(res[node]) {
    //旧属性，添加 or 覆盖
    var key = res[node];
    var newNode = obj.shift();//发现已经存在时，移动到下一级

    key[newNode] = parse(obj, new Object(key[newNode]))//构建下一级对象
    res[node] = key;//令本级对象属性指向获得的下一级对象
  }else {
    //新属性，直接构建
    res[node] = parse(obj, JSON.parse(JSON.stringify(res)))
  }
  return res;
  
}

