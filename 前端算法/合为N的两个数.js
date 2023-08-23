function FindNumbersWithSum(array, sum)
{
    // write code here
    let res = []
    if(array.length<2){
      return res;
    }
    let left = 0;
    let right = array.length-1;
    let min = Number.MAX_VALUE;
    while(left<right){
      if(array[left]+array[right]===sum){
        res = array[left]*array[right]<min? [array[left],array[right]]:res;
        min = Math.min(min,array[left]*array[right]);
        left++;
        right--;
      }
      else if(array[left]+array[right]>sum){
        right--;
      }
      else{
        left++
      }
    }
    return res;
}

FindNumbersWithSum([1,2,3,4,5,6,7],5)