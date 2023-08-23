//['a','b','c','a','b','a']
function getNext(p){
  let next = [];
  next[0] = -1;
  j=0;
  k=-1;
  while(j < p.length-1){
    if(k==-1 || p[j]===p[k]) {
      next[++j] = ++k;
    }
    else{
      k = next[k]
    }
  }
  return next;
}

function kmp(s, p, next) {
  let i=0;
  let k=0;
  let slen = s.length;
  let plen = p.length;

  while(i<slen&&k<plen) {
    if(k==-1||s[i]==p[k]){
      i++;
      k++;
    }
    else{
      k=next[k];
    }
  }
  if(k==plen){
    return i-k;
  }
  return -1;
}
var s = ['d','b','a','b','c','a','b','a','b','a','e'];
var p = ['a','b','c','a','b','a'];
var next = getNext(p);
console.log(kmp(s,p,next))