/*
* 稳定排序，平均复杂度n^2，最好n，最坏n^2 
* 找到在0-n中比当前数小的数，将当前数放在其后面
*/
let arr = [7, 3, 4, 5, 10, 7, 8, 2]
        //[3, 7, 4, 5, 10, 7, 8, 2]
        //[3, 4, 7, 5, 10, 7, 8, 2]
function insertSort(arr){
  for(let i=1;i<arr.length;i++){
    //取出待插入元素
    let temp = arr[i];
    let j;
    for(j = i;j>0;j--){//已插入的排序元素
      if(arr[j-1]>temp){//发现有元素比待插入元素大
        arr[j] = arr[j-1]//将该元素往后移一位
      }
      else{//说明有序，因为前面是有序的
        break;
      }
    }
    //注意：循环推出后j已经再往前移了一位
    //此时最前面有两个相同的数，将待插入的数查到j的位置,j为左边那个相同的数
    arr[j] = temp;
  }
  return arr;
}

console.log(insertSort(arr))

