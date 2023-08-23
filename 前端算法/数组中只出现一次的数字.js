function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    let res = []
    for(let i=0;i<array.length;i++){
      let item = array[i];
      if(array.indexOf(item)===array.lastIndexOf(item)) {
        res.push(item);
      }
    }
    return res;
}