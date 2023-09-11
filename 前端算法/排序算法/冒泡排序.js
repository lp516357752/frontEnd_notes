/*
* 稳定，平均n^2，最好n，最坏n^2
*/
let arr = [7, 3, 4, 5, 10, 7, 8, 2]

function BubbleSort(arr) {
  for(let i=0; i<arr.length-1; i++) {//总比较轮数
    for(let k=0; k<arr.length-i-1; k++) {
      // -i是因为每一轮能把当前循环的最大数放最后面去，后面的已经比较完了
      // -1是因为需要取到i+1，所以不需要遍历最后一项
      if(arr[k]>arr[k+1]) {
        [arr[k], arr[k+1]] = [arr[k+1], arr[k]]//解构赋值
        // let item = arr[k];
        // arr[k] = arr[k+1];
        // arr[k+1] = item;
      }
    }
    console.log(arr);
  }
  return arr;
}


let s = new Date();
console.log(BubbleSort(arr))
let e = new Date();
console.log(e.getTime()-s.getTime())