function StrToInt(str)
{
    // write code here
    if(str==""||str=='-0'){
      return 0;
    }
    var reg = /^[+-]?[0-9]+$/;
    if(reg.test(str)){
      if(str[0]=='+'){
        return str.slice(1,str.length);
      }
      return str;
    }
    else{
      return 0;
    }
}

console.log(StrToInt("-0"));
