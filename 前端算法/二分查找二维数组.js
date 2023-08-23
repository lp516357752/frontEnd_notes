let arr =[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
console.log(Find(7,arr))

function search(arr,target) {
  let left = 0;
  let right = arr.length-1;
  while (left<=right) {
    let mid = parseInt((left+right)/2);
    if(arr[mid]>target){
      right=mid-1;
      continue;
    }
    else if(arr[mid]<target){
      left=mid+1;
      continue;
    }
    else if(arr[mid]==target) {
      return true
    }
    return false;
  }
}
function Find(target, array)
{
  let i=0;
  while(i<array.length) {
    if(search(array[i],target) === true){
      return true;
    }
    else{
      i++;
    }
  }
    return false;
}


