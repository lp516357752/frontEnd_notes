/*
* 稳定，复杂度nlogn，最好最坏都为nlogn
* 递归到最小子数组(1,2,3)，对其排序并返回
*/
var count = 0;
function InversePairs(data)
{
  // write code here
  let length = data.length;
  if(length<2) {
    return 0;
  }
  
  console.log(mergeSort(data, 0, length-1)) 
  return count%1000000007;
}
function mergeSort(arr, left, right) {
  if(arr.length<1||left>=right) {
    return false;
  }
  let middle = Math.floor((left+right)/2);//注意js会精确到小数点，需要floor函数
  console.log(mergeSort(arr, left, middle));//数组左边递归到最小子数组
  console.log(mergeSort(arr, middle+1, right));//数组右边递归到最小子数组
  
  return merge(arr, left, middle, right)//合并左右最小子数组
}

function merge(arr, left, middle, right) {
  let temp = [];
  let size = 0;//临时数组下标
  let i=left;//左边的遍历器
  let k=middle+1;//右边的遍历器

  while(i<=middle&& k<=right) {//将左边或右边全部加入temp数组
    if(arr[i]<=arr[k]) {//加入最小值
      temp[size++] = arr[i++];
    }
    else if(arr[i]>arr[k]) {//若前大于后，即left>right，左边大于右边
      temp[size++] = arr[k++]
      count+=(middle-i+1);//加上arr[i]值之后的数组长度(左边的值)
    }
  }

  //把剩余的数全部加入temp中
  while(i<=middle) {
    temp[size++] = arr[i++];
  }
  /* 两个只会运行一个 */
  while(k<=right) {
    temp[size++] = arr[k++];
  }
  //把temp有序数组复制到arr的"对应"位置
  for(let i=left,k=0;i<=right;i++,k++) {
    arr[i] = temp[k]
  }
  return arr;
}
console.log(InversePairs([7, 3, 4, 5, 10, 7, 8, 2]))


