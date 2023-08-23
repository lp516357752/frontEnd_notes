//求如何让数组元素之间的差值的和最大

//var arr=[5,10,25,40,25];
//var arr=[2 ,3 ,5, 7, 11, 13, 17, 19]
var arr=[0,6,2,7,3]
arr.sort((a,b)=>a-b);//[5,10,25,25,40]

/*
  可以确定，正确顺序是高-低-高-低-高(本题顺序)....
  或者低-高-低-高-低......
  至于如何低与低(高与高)如何排列不考虑，
  但至少知道，结果大致成 2*高-2*低的大致样子。
*/
/*
按照插值的思想
最高或者最小总是会优先放在中间，
谁在中间(高-低-高 or 低-高-低)就以谁为基准，并且位数比另一个少一位
(大减小)
高低高：第一个高多加了一次，最后一个低被多减了一次
低高低：最后一个低多减了一次，第一个高被多加了一次

所以总是最大低和最小高特殊
*/
var len=arr.length;
var res=0;
if(len%2!=0) {//奇数，第一个高多加了一次，最后一个低被多减了一次
  let index =len/2+1;//从高位开始
  let left=arr.slice(0,len/2);//中间那一位另外计算，因为只加了一次
  let right=arr.slice(index);
  let small=left.reduce((pre,cur)=>{ return pre+cur },0)
  let big=right.reduce((pre,cur)=>{ return pre+cur },0)
  res=2*(big-small)-right[0]+arr[Math.floor(len/2)];

}else{//偶数
  let index =len/2;//从高位开始
  let left=arr.slice(0,index);
  let right=arr.slice(index);
  let small=left.reduce((pre,cur)=>{return pre+cur },0)
  let big=right.reduce((pre,cur)=>{return pre+cur },0)
  res=2*(big-small)-right[0]+left[left.length-1];

}
console.log(res)