var arr=[1,2,3,5];

var count = 0;
for(let i=0;i<arr.length;i++){
  var n=arr[i];
  count = cal(n)
  console.log(count)
}


function cal(num) {
  if(num==1){
    return 1;
  }
  else if(num==2) {
    return 2;
  }
  else if(num==3) {
    return 4;
  }
  else{
    return cal(num-1)+cal(num-2)+cal(num-3);
  }
}