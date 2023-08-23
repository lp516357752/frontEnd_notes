var maxProfit = function(prices) {
  if(prices.length<2) {
      return 0;
  }
  var min = prices[0];
  var res = 0;
  for(let i=1;i<prices.length;i++) {
      if(prices[i]>min) {//有数值比最小值大，则计算；最大利润
          res = res>prices[i] - min ? res:prices[i]-min;
      }else{//出现一个比当前最小数更小的数，更新最小数
          min = prices[i];
      }
  }
  return res;
};