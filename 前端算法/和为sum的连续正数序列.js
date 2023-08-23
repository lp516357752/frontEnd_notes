function FindContinuousSequence(sum)
{
    // write code here
    let mid = Math.floor(sum/2);
    if(sum<3) {
      return [];
    }
    let res = []
    for(let i=1;i<=mid;i++) {
      
      for(let k=2; ; k++) {//连续k项
        let count = (i + (i+k-1))*k/2;
        if(count>sum) {
          break;
        }
        else if(count===sum) {
          res.push(createArr(i,k))
        }
      }
    }
    return res;
}

function createArr(s, n) {
  let res = [s]
  for(let i=1;i<n;i++) {
    res.push(s+i);
  }
  return res;
}

console.log(FindContinuousSequence(9))