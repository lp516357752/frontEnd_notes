var line = [1,2,3,5]
var a = line[0],b = line[1],c = line[2], n = line[3]

var matrix = [[0,1],[2,3]]
var row = matrix.length;
var col = matrix[0].length;

var s = [[3,3],[5,6],[6,1],[8,3],[8,8]]

for(let i=0;i<n;i++) {
    var data = s[i]
    var x = data[0],y = data[1];
    while(Math.max(row,col)<Math.max(x,y)) {
      
      matrix = extend(matrix,a,b,c);
      row = matrix.length;
      col = matrix[0].length;
      console.log(matrix)
    }
    
    console.log(matrix[x-1][y-1]%(Math.pow(10,9)))
}

function extend(matrix, a, b, c) {
  var m = new Array(matrix.length*2);
  var row = matrix.length;
  var col = matrix[0].length

  for(let i=0;i<m.length;i++) {
    var item = new Array(m.length);
    for(let k=0;k<item.length;k++) {
      if(i<row&&k<col) {//左上角
        item[k] = matrix[i][k]
      }else if(i>=row&&k<col) {//左下角
        item[k] = matrix[i-row][k]+b
      }else if(i<row&&k>=col) {//右上角
        item[k] = matrix[i][k-col]+a
      }else{//右下角
        item[k] = matrix[i-row][k-col]+c
      }
    }
    m[i] = item;
  }
  return m;
}