//动态规划
function cutRope(number)
{
    // write code here
    if(number <=1) {
      return 0;
    }
    if(number == 2) {
      return 1;
    }
    if(number ==3) {
      return 2;
    }

    let res = [0,1,2,3];//长度大于3时的可剪最优空间
    let max = 0;
    for (let i = 4; i <= number; i++) {
      //在已知解空间里面循环，以获得i的解,每次新的解是基于前面的解空间
      for (let j = 1; j <= i/2; j++) {//获得解空间中的最大积
        let val = res[j] * res[i-j];
        if(val>max) {
          max = val;
        }
      }
      res[i] = max;
    }
    res[res.length] = max;    
    return max;
}

console.log(cutRope(8));
