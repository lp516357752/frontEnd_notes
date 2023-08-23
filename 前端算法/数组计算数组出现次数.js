//计算数组中数字的出现次数
//返回是否有数字出现次数大于1
var b = [];
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let res = {};
    let length = numbers.length;
    for (let i = 0; i < length; i++) {//为res对象添加键值对，键为数字，值为出现次数
      if(!res[numbers[i]]) {
        res[numbers[i]] = 1;
      }else{
        res[numbers[i]]++;
      }
    }

    console.log(res);
    
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        if(res[key]>1) {
          duplication[0] = key;
          return true
        }
      }
    }
    return false;   
}

let arr = [2,1,3,1,4];

console.log(duplicate(arr, b));
console.log(b[0]);