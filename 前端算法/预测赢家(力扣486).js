var PredictTheWinner = function(nums) {
  let length = nums.length;
  if(length%2==0) {
    return true;
  }
  /*递归解法*/

  // let counter = (i, j) => {
  //   if(i==j) return nums[i];

  //   let best1 = nums[i] - counter(i+1,j);//选择左边
  //   let best2 = nums[j] - counter(i,j-1);//选择右边
    
  //   return Math.max(best1,best2)//比较两种选法的最优
  //   //理解：
  //   //对于最小子状态[3,5]（pass：[5]就不用说了）
  //   //可以得到选择的最优解
  //   //对于[...1,3,5],递归=[ ...1, 最优解[3,5] ]的最优解
  // }

  // return counter(0,length-1)>=0;
  
  /**动态规划 */
  let dp = [];
  for(let i=0;i<length;i++) {
    let item = [];
    // for(let k=0;k<length;k++) {
    //   if(k==i) {
    //     item.push(nums[i]);
    //   }else{
    //     item.push(0);
    //   }
    // }
    item[i] = nums[i]
    dp.push(item)
  }
  for(let i=length-2;i>=0;i--) {
    for(let k=i+1;k<length;k++) {
      dp[i][k] = Math.max(nums[i]-dp[i+1][k],nums[k]-dp[i][k-1])//选左还是选右
    }
  }
  return dp[0][length-1]>=0
};


console.log(PredictTheWinner([1,1,1]))
//2,4,55,6,8