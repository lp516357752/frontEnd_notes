var matrix = [
  [0,2,4,0,0,0],
  [0,0,1,4,2,0],
  [0,0,0,0,3,0],
  [0,0,0,0,0,2],
  [0,0,0,3,0,2],
  [0,0,0,0,0,0]
]
var _MAX = Number.MAX_SAFE_INTEGER;
var row = matrix.length;
var col = matrix[0].length;

function Dijkstra(matrix, src) {
  var dis = new Array(row).fill(Infinity);
  dis[src] = 0;
  for(let i=0;i<row;i++) {
    for(let k=0;k<col;k++) {
      if(dis[i]+matrix[i][k]<dis[k]&&matrix[i][k]!=0) {
        dis[k] = dis[i]+matrix[i][k]
      }
    }
  }
  return dis;
}

let res = Dijkstra(matrix, 0);
console.log(res);