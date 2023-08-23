var Singleton = (function (){
  var instance;
  var createSilgle = function (name) {
    this.name = name;
    if(instance) {
      return instance;
    }
    this.getName();
    return instance=this;
  }
  createSilgle.prototype.getName = function() {
    console.log(this.name);
  }
  return createSilgle;
})()

var a = new Singleton('a')
var b = new Singleton('b')
console.log(a==b)