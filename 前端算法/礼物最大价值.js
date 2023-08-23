var maxValue = function(grid) {
  var row = grid.length;
  var col = grid[0].length;

  var dp = new Array(row);
  var item = new Array(col).fill(0);
  dp.fill(item);
  dp[0][0] = grid[0][0];

  var search = (i,k) => {
      //超时
      // if(i==0&&k==0) {
      //     return grid[0][0];
      // }
      // if(i<0||i>=row||k<0||k>=col) {
      //     return 0;
      // }
      // return grid[i][k] + Math.max(search(i-1,k),search(i,k-1));

      for(let i=0;i<row;i++) {
          for(let k=0;k<col;k++) {
              if(i==0&&k==0) continue;
              if(i==0) {
                  dp[i][k] = grid[i][k] + dp[i][k-1];//边界
              }else if(k==0) {
                  dp[i][k] = grid[i][k] + dp[i-1][k];//边界
              }else{
                  dp[i][k] = grid[i][k] + Math.max(dp[i][k-1],dp[i-1][k]);//取上左最大
              }
          }
      }
      return dp[row-1][col-1]
  }
  return search(row-1,col-1)
 
};