let arr = [12, 23, 12, 15, 25, 23, 25, 14, 16];

/*  Set */
function theSet(arr){
  let res = [...new Set(arr)];//扩展运算符
  res = Array.from(new Set(arr));//Array.from
  return res;
}

/*indexOF去重+额外数组 */
function theIndexOF(arr){
  let res = []
  for(let i=0; i<arr.length; i++) {
    let item = arr[i];
    //let args = arr.slice(i+1);//获取当前项后面的数组
    if(res.indexOf(item)<0) {
      res.push(item)
    }
  }
  return res
}

/*  利用数组键值对{} */
function theObj(arr) {
  let obj = {};
  for(let i=0; i<arr.length; i++){
    let item = arr[i];
    //已存在
    if(typeof obj[item]!=='undefined'){
      arr[i] = arr[arr.length-1];
      arr.length--;
      i--;
      continue;
    }
    //不存在
    obj[item] = item;
  }
  return arr;
}

/*正则式匹配相邻项 */
function theRegExp(arr){
  arr.sort((a,b)=>a-b);//先排序
  arr = arr.join('@')+'@'
  let res = []
  let reg = /(\d+@)\1*/g;// \1：出现与前面一个相同分组
  arr.replace(reg, (val, group1) => {
    console.log(val,group1)
    res.push(Number(group1.slice(0,group1.length-1)))
  })
  return res
}

/*  其他方案  */
function theCompare(arr){
  for(let i=0; i<arr.length; i++) {
    let item = arr[i];
    let args = arr.slice(i+1);//获取当前项后面的数组
    if(args.indexOf(item)>-1) {
      // //设置为null再filter
      // arr[i] = null;

      // //splice删除，防止数组塌陷，i--
      // arr.splici(i, 1);
      // i--;

      //用最后一项替换,防止数组塌陷i--
      arr[i] = arr[arr.length-1];
      arr.length--;
      i--;

    }
  }
  //filter去除
  // arr = arr.filter( item => {
  //   return item!==null;
  // })
  return arr
}

console.log(theRegExp(arr))

