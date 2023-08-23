const keyWord = ['if', 'Integer', 'matches', 'toString'];
const notion = ['<', '>', '=', '{', '}', ';'];
const target = `
  Integer a = 100;
  Integer b = 50;
  if(a>b) {a=0}
  if(a.toString().matches("^[A-Za-z0-9]+$")) {b=0}
`
let result = {

}
for(let i=0; i<target.length; ){
  console.log(i);
  let pre = target[i];
  if(pre === ' '){
    continue;
  }
  for(let k = i+1; k<target.length; k++){
    let item = target[k];
    if(isEmpty(item) || isNotion(item)){//1、扫描到单个字符
      if(isNotion(item)){
        result.item = "标识符"
      }
      i = k+1;
      break;
    }
    else{
      pre=pre+item;
    }
  }
  if(isStr(pre)){//是否是字母
    result.pre = "字母";
  }
  else if(isNotion(pre)){//是否标识符
    result.pre = "标识符";
  }
  else if(isNum(pre)){//是否是数字
    result.pre = "数字";
  }
  else if(isKey(pre)){//是否是关键字
    result.pre = "关键字";
  }
  else{
    result.pre = "错误代码";
  }
}

console.log(result);



function isEmpty(str){//是否是空格
  if(str === ' '){
    return true;
  }
  return false;
}
function isStr(str){
  if((str>='a'&&str<='z')||(str>='A'&&str<'Z')){
    return true;
  }
  return false;
}
function isNum(str){
  if(str>='0'&&str<='9'){
    return true;
  }
  return false;
}
function isKey(str){
  if(keyWord.includes(str)){
    return true;
  }
  return false;
}
function isNotion(str){
  if(keyWord.includes(str)){
    return true;
  }
  return false;
}