var n=3,a=50;
var arr=[50,105,200]

var cur=a;
for(let i=0;i<n;i++){
    if(cur>=arr[i]) {
        cur+=arr[i]
    }else{
        cur+=getMaxDivisor(arr[i],cur)
    }
}
print(cur);

function getMaxDivisor(a, b){
    let temp = a%b;
    while(temp!=0) {
      a = b;
      b=temp;
      temp=a%b;
    }
    return b;
}