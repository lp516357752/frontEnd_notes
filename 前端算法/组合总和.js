//暴力
//从前往后选取基点，以该数为第一个数从当前数往后搜索。
var combinationSum = function(candidates, target) {
  const res = [];
  const dfs = (index, last, item)=>{
    
    if(index==candidates.length) {//搜索完
      return;
    }
    if(last==0) {//符合要求
      res.push(item);
      return;
    }
    
    dfs(index+1, last, item);//先深度搜索，暂不考虑是否已经超过了target（考虑剪枝）
    console.log(candidates[index],last,item)
    
    if(last- candidates[index] >= 0) {//如果可以加入结果集，
      dfs(index, last - candidates[index], [...item, candidates[index]]);//加入结果集，并深度搜索
    }
  }
  
  dfs(0, target, [])
  console.log(res);
};

combinationSum([2,3,6,7], 7)
