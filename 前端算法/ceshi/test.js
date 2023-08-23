var n=6,m=3;
var s = "aabddc",t = "acb";

var res = 0;
var s_index = 0;
var start = 0
while(s_index<m) {
  var item = t[s_index];
  var flag = 1;
  
  for(let i=start;i<n;i++) {
    if(item==s[i]){
      flag=0;//找到才退出的
      s_index++;
      start = i+1;
      res+=(i+1);
      break; 
    }
  }
  if(flag) {
    res = "No";
    break;
  }
}
if(typeof res=="number") {
  console.log("Yes")
  console.log(res)
}else{
  console.log("No")
}