/**快排
 * 不稳定，平均nlogn，最好nlogn，最快n^2
 
 * 选取当前数组中间一个基点，扫描数组，将比它小的数放在左边
 * 比它大的放到右边，连接左——基点——右，同时对左右数组使用相同
 * 方法进行递归排序，直到数组只剩下一个数。
 */
let arr = [7, 3, 4, 5, 10, 7, 8, 2]

//递归实现
function quickSort(arr) {
  if(arr.length<=1) {
    return arr;
  }

  let midIndex = Math.floor(arr.length/2);//获取中间值下标
  let midvalue = arr.splice(midIndex, 1)[0];//获取并且去除中间值

  let leftarr = [];
  let rightarr = [];
  for(let i=0;i<arr.length;i++) {
    let item = arr[i];
    item<midvalue ? leftarr.push(item) : rightarr.push(item);
  }
  //左数组 + 中间值 + 右数组
  return quickSort(leftarr).concat(midvalue, quickSort(rightarr));
}

let s = new Date();
console.log(quickSort(arr));
let e = new Date();
console.log(e.getTime()-s.getTime())