function reOrderArray(array)
{
  // write code here
  let left = [];
  let right = [];
  for(item of array) {
    if(item%2!=0) {
      left.push(item)
    }else{
      right.push(item)
    }
  }
  return left.concat(right)
}
