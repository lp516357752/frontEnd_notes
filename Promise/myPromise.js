/*
自定义Promise 模块 IIFE自调用匿名函数
*/
(function (params) {
  const PEDNING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  /*
  Promise构造函数
  */
  function Promise(executor) {
    /*
    将当前Promise对象保存，不然在运行时，后面的
    that会指向调用该Promise函数的主体(window)
    */
    const that = this;

    that.status = PEDNING;//执行状态
    that.data = undefined;//用于存储结果数据的结构
    that.callbacks = [];//回调函数集 元素{ onRESOLVED() {}, onREJECTED() {} }，就是将then函数里面的回调函数放到这里面


    function resolve(value) {
      //如果当前状态不是PENDING，直接结束
      if(that.status!==PEDNING) {
        return;
      }
      //修改状态
      that.status = RESOLVED;
      //保存数据
      that.data = value;
      //如果有待执行callback函数，立即异步执行函数，放入执行队列
      if(that.callbacks.length>0) {
        
        setTimeout(() => {//本来应该是在微队列的，模拟而已
          that.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value);
          });
        }, 0);
      }
    }
    
    function reject(reason) {
      //如果当前状态不是PENDING，直接结束
      if(that.status!==PEDNING) {
        return;
      }
      //修改状态
      that.status = REJECTED;
      //保存数据
      that.data = reason;
      //如果有待执行callback函数，立即异步执行函数，放入执行队列
      if(that.callbacks.length>0) {
        setTimeout(() => {//本来应该是在微队列的，模拟而已
          that.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason);
          });
          
        }, 0);
      }
      
    }

    //立即同步执行executor
    //如果执行器内部抛出了异常，则直接变为失败
    try {
      executor(resolve, reject);
    } catch (error) {
      return Promise.reject(error)
    }

  }

  /*
  Promise 原型then()
  指定成功和失败的回调函数
  返回一个新的Promise对象
  */
  Promise.prototype.then = function(onResolved, onRejected) {
    //向后传递成功的value
    onResolved= typeof onResolved==='function' ? onResolved:value =>value
    //实现异常穿透，传递错误回调到
    onRejected= typeof onRejected==='function' ? onRejected:reason =>{throw reason}
    
    const that = this;
    
    return new Promise((resolve,reject) => {

      function handle(callback) {
        //该函数用于运行回调并改状态
        /*
          1、如果抛出异常，return的promise会失败，reason就是error
          2、如果回调函数返回的不是promise，return的promise会成功，value就是返回的值
          3、如果回调函数返回的是promise，return的promise就是这个promise的结果
          */
        try {
          const result =  callback(that.data)
          if(result instanceof Promise) {
            //是一个promise对象
            //则返回的promise的状态也为resolved成功/rejectd失败
            result.then(resolve,reject)
          }else{
            //让其成功
            resolve(result)
          }
          }catch (error) {
            reject(error)
          }
      }

      //判断状态，执行函数并更改新promise的状态
      if(that.status===PEDNING) {
        //如果当前promise还在运行中，未得到结果,则添加回调函数到队列
        that.callbacks.push({
          onResolved (value) {//执行回调onXXX后还需要更改新promise的状态
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          }
        })
      }else if(that.status===RESOLVED) {
        //已经得到运行结果
        setTimeout(() => {
          handle(onResolved)
        });
      }else{//'rejected'
        setTimeout(() => {
          handle(onRejected)
        });
      }
    })
  }

  /*
  Promise 原型catch()
  指定失败的回调函数
  返回一个新的Promise对象
  */
  Promise.prototype.catch = function(onRejected) {
    return this.then(undefined, onRejected)
  }

  /*
  Promise 函数对象的resolve方法
  返回一个指定结果的新的Promise对象
  */
  Promise.resolve = function(value) {

  }

  /*
  Promise 函数对象的reject方法
  返回一个指定reason的新的Promise对象
  */
  Promise.reject = function(reason) {

  }


  /*
  Promise 函数对象的all方法
  返回第一个失败的新的Promise对象或者
  所有Promise成功时值结果数组的一个Promise对象
  */
  Promise.all = function(promises) {

  }

  /*
  Promise 函数对象的race方法
  返回第一个完成的Promise对象
  */
  Promise.race = function(promises) {

  }

  //向外暴露Promise函数
  window.Promise = Promise;
})()
