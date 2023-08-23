//动态规划
function countNums(num,sum) {
  var dp = new Array(sum+1).fill(Infinity);
  dp[0] = 0;
  for(let i=1;i<=sum;i++) {
    for(let k of num) {
      if(i>=k) {
        dp[i] = Math.min(dp[i],dp[i-k]+1)
      }
    }
  }
  return dp
  
}