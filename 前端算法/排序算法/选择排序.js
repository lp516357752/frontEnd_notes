/*
* 不稳定排序，平均最好最坏都为n^2
* 即从后面的数组中选出最小的数k放到前面i位置
*/

let arr = [7, 3, 4, 5, 10, 7, 8, 2]

function chooseSort(arr) {
  for(let i=0;i<arr.length-1;i++) {
    let minIndex = i;//初始化最小下标
    for(let k=i;k<arr.length;k++) {
      if(arr[k]<arr[minIndex]) {//发现更小的值
        minIndex = k;//换下标
      }
    }
    if(minIndex!==i) {//如果有新的最小值
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log(arr)
  }
  return arr;
}

console.log(chooseSort(arr))