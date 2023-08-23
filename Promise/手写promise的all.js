Promise.prototype.all = function(promises) {
  let results = [];
  let length = promises.length;
  let size = 0;
  return Promise((resolve,reject)=>{
    for(p of promises) {
      Promise.resolve(p).then(value=>{
        results[size++] = value;
        if(size==length) {
          return resolve(results)
        }
      },reason=>{
        return reject(reason)
      })
    }
  })
}