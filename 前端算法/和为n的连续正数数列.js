
/*  思路 
参考等差数列求和公式 (a1 + an)*n/2
初始值(外层循环)i：从1开始，尝试最高到middle
k：累加的次数，
*/

function createArr(n, len) {//返回一个数组，从n开始，有len项
  let arr = new Array(len).fill(null);
  let temp = [];
  arr[0] = n;
  arr = arr.map((item,index) => {
    if(item===null) {
      item = temp[index-1]+1;
    }
    temp.push(item);
    return item;
  });
  return arr;
}

/*
 *从1到count/2循环，无需累加，利用等差数列求和公式算出该范围内的数的和 
 */

function getArr(count) {
  let res = [];
  let middle = Math.ceil(count/2)//可以发现，middle再加上比它大的肯定不行
  for(let i=1;i<middle;i++) {
    for(let k=2; ; k++) {//至少两项
      let total = (i + (i+k-1)) * (k/2);//首项i，尾项i+k-1
      if(total>count) {//已经大于，无需再往后面加了
        break;
      }
      else if(total===count){
        res.push(createArr(i,k))
        break;
      }
    }
  }
  return res;
}

console.log(getArr(15))

