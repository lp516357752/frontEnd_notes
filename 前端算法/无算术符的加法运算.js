//不用+ - * /做加法运算
//涉及位运算和逻辑运算，联想电路实验的所用公式
function Add(num1, num2)
{
    while(num1) {
      let item = num2;
      num2 = num1^num2;//不考虑进位的加法,异或运算
      num1 = (num1&item)<<1;//与运算，计算进位的值，直到变为0，即不再进位时，表示得到了结果
    }
    return num2;
}

console.log(Add(10,12));
