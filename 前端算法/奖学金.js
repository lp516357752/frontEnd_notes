/*课程数  满分  平均成绩  
  n=5     r=10   avg=9
  平时成绩  花费时间
    0         5
    9         1
    8         1
    0         1
    9       100
*/
while(line=readline()){
  var line=line.split(' ');
  var n=parseInt(line[0]),r=parseFloat(line[1]),avg=parseFloat(line[2]);
  var arr=[];
  for(var x=0;x<n;x++){
      var lines=readline().split(' ');
      var a=[];
      for( var i=0;i<2;i++){
          a[i]=parseFloat(lines[i]);

      }
       arr.push(a);
  }

  var total = n * avg;//总分数
  var cur=0,times=0;//当前分数、总花费时间
  for(let i=0;i<n;i++) {//获取开始时的总分数
    cur+=arr[i][0];
  }
  if(cur<total) {//如果开始时的分数小于总分数
    //排序，优先选择时间消耗少的课程，并且视情况优先学满
    arr.sort((a,b)=>{
      return a[1]-b[1];
   })
   for(let i=0;i<n;i++) {
      if(arr[i][0]<r) {
        let grade = Math.ceil(r-arr[i][0]);//当前科目还能获得分数
        if(total-cur>=grade) {//剩余需求分数是否大于当前可获得分数
          cur+=grade;
          times=times + arr[i][1]*grade;//所需时间
        }
        else{//不需要学满都可以完成目标
          times+=(total-cur)*arr[i][1];//仅花费剩余需求分数的时间来学习
          cur=total;
          break;
        }
      } 
    }
  }
  console.log(times);
}


