var longestPalindrome = function(s) {
  if(s.length==1) {
    return s;
  }
  /* dp[i][k] 表示s[i]到s[k]是否是一个回文串*/
  var dp = new Array(s.length);
  for(let i=0;i<s.length;i++) {
      dp[i] = new Array(s.length);
      for(let k=0;k<s.length;k++) {
          if(i==k) {
              dp[i][k] = true//一个字符肯定是回文
          }
      }
  }
  var min=s.length-1,max=s.length-1;
  for(let i=s.length-1;i>=0;i--) {
    for(let k=i+1;k<s.length;k++) {
      if(k==i+1) {//相邻字符主动判断
        dp[i][k] = s[i]==s[k]
      }else{
        dp[i][k] = dp[i+1][k-1]&&s[i]==s[k];//i——k是否是一个回文取决于内 部一层是否是回文&&这两个字符是否是回文
      }
      if(dp[i][k]&&(k-i)>(max-min)) {//如果是回文，与当前发现的最长回文串长度进行比较
        min=i;
        max=k;
      }
    }
  }
  return s.slice(min,max+1)
}
console.log(longestPalindrome("cdabbacc"))