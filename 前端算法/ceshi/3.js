var n=6,m=3;
var s = "badcccccb",t = "acb";

var res = 0;

if(m>n) {
    res = "No"
}

var s_index = 0;
var start = -2;
if(res===0) {
  while(s_index<m) {
    var item = t[s_index];
    
    if(s.indexOf(item,(start+1))>start) {
      start = s.indexOf(item,(start+1));
      res+=(start+1)
      s_index++;
    }else{
      res = "No";
      break;
    }
    
  }
}

if(typeof res=="number") {
  console.log("Yes")
  console.log(res)
}else{
  console.log(res)
}