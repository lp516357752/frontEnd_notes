var nums = [10000,110000]
var M = nums[0],N=nums[1];
var res = 0;
for(let i=M;i<=N;i++) {
    var item1 = parseInt(i.toString().slice(0,2));
    var item2 = parseInt(i.toString().slice(2,4));
    var item3 = parseInt(i.toString().slice(4,6));
    if(item1[0]==0||item2[0]==0||item3[0]==0) continue;
    
    if(isSingle(i.toString())) {
      if(item1+item2===item3) {
        res++;
      }
    }
}
console.log(res)

function isSingle(num) {
  var data = {};
  for(let i=0;i<num.length;i++) {
    if(data[num[i]]) {
      return false;
    }
    data[num[i]] = 1;
  }
  return true;
}
