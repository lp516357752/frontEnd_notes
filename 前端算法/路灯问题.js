var n=7,l=15;
var arr=[15,5,3,7,9,14,0];


for(var j=0;j<arr.length;j++){
  if (arr[j]=='') {
      arr.splice(j,1);
      j=j-1;
  }
  else{
      arr[j]=parseInt(arr[j]);
  } 
}

arr.sort((a, b) => a-b);
var space = Math.max(arr[0],l-arr[n-1]);
for(let i=0;i<n-1;i++) {
  space = (arr[i+1]-arr[i]) > space ? (arr[i+1]-arr[i])/2:space;
}


print(space.toFixed(2))

