function hasPath(matrix, rows, cols, path)
{
    // write code here
    if(!rows || !cols || rows*cols<path.length){
      return false;
    }
    for(var i=0; i<rows; i++){
      for(var k=0; k<cols; k++){
        if(judge(matrix, rows, cols, i, k, [], path, 0)){//矩阵，行数，列数，当前值坐标，已遍历数组，目标路径，path的遍历控制
          return true;
        }
      }
    }
    return false;
}
function judge(matrix, rows, cols, i, k, flag, path, j) { 
  var index = i*cols+k;
  //矩阵下标越界、当前矩阵数值不等于下一个搜索值、该位置已被搜索过————此次失败
  if(i<0 || k<0 || i>=rows || k>=cols || matrix[index] != path[j] || flag[index]){
    return false;
  }

  if(j == path.length-1){//遍历完成
    return true;
  }

  flag[index]=true;
  //任意一个方向找到了下一个搜索值
  if(judge(matrix, rows, cols, i-1, k, flag, path, j+1)||//上
    judge(matrix, rows, cols, i+1, k, flag, path, j+1)||//下
    judge(matrix, rows, cols, i, k-1, flag, path, j+1)||//左
    judge(matrix, rows, cols, i, k+1, flag, path, j+1))//右
    {
      return true;
    }
  //没找到
  flag[index]=false;//标志当前没找到
  return false;
}

console.log(hasPath("ABCESFCSADEE",3,4,"ABCCED"))

