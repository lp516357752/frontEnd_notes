function run(arr=[1,2,3]) {
  var t = arr.shift()
  if(!t) return;
  setTimeout(() => {
    console.log(t)
    run(arr)
  }, t*1000);
}
run()