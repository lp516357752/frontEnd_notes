function deepClone(obj) {
  //过滤特殊情况
  if(obj === null) return null;//空对象
  if(typeof obj !== "object") return obj;//基本类型
  if(obj instanceof RegExp) {//正则式对象
    return new RegExp(obj);
  }
  if(obj instanceof Date) {//日期对象
    return new Date(obj);
  }

  //不创建空对象，而是创建待拷贝对象的构造函数的实例
  //基本类型和普通对象{}的拷贝
  let newObj = new obj.constructor;
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj;
}