var m = 7,n = 3;//7个苹果，3个盘子
function dfs(m,n) {
  if(m==0||n==1) {//边界，一个盘子 和 没有水果了
    return 1;
  }
  else if(m<n) {//盘子数大于水果数，多余的盘子没有影响
    return dfs(m,m)
  }
  else{//m>n，空出一个盘子不放 和 每个盘子都至少放一个水果
    return dfs(m,n-1) + dfs(m-n,n)
  }
}
console.log(dfs(7,3))