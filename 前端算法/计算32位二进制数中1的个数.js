function NumberOf1(n)
{
  //一般思路
  // write code here
  if(n==0) {
    return 0;
  }
  n = n.toString(2)
  let count = 0;
  if(n>0) {
    for(let i=0;i<n.length;i++) {
      if(n[i]==1) {
        count++;
      }
    }
  }else{
    count=32-n.length+1;//除去负号
    let m = 2**(n.length-1)-1+(parseInt(n,2))//反码
    let num = (m+1).toString(2)//补码

    for(let i=0;i<num.length;i++) {
      if(num[i]==1) {
        count++;
      }
    }

  }

  return count;
}
function NumberOf1(n)
{
  //巧妙方法
  let count = 0;
  while(n!=0) {
    n=n&(n-1);//每次这样操作都能去掉n最右边的一个1
    count++;
  }
  return count;
}
console.log(NumberOf1(-25))