function Fibonacci(n)
{
    // write code here
  if(n==0) {
    return 0;
  }
  if(n==1) {
    return 1;
  }
  var arr = [0,1];
  for(let i=2;i<=n;i++) {
    arr[i] = (arr[i-1]+arr[i-2])
  }
  return arr[n];
}
console.log(Fibonacci(2))