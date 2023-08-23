function LastRemaining_Solution(n, m)
{
    if(n<1){
      return -1;
    }
    let cur = 0;
    let queue = [];
    for (let i = 0; i < n; i++) {
      queue.push(i);
    }
    while(queue.length>1){
      let tmp = queue.shift();
      cur++;
      if(cur !== m){
        queue.push(tmp);
      }
      else{
        cur = 0;
      }
    }
    return queue.shift();
}

LastRemaining_Solution(5,3)