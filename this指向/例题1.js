var x = 2;
var y={
  x:3,
  z:(function(x){
    this.x*=x;
    //console.log("this.x:",this.x);
    x+=2;  
    return function(n){
      this.x*=n;
      //console.log("2-this.x:",this.x)
      x+=3;
      console.log(x);
    }
  })(x)
}
var m = y.z;
m(4);//2+2+3
y.z(5);//7+3    this.x:3*5
console.log(x,y.x) //        3*5
