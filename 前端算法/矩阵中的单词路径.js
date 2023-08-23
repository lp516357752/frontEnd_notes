let board = [["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]], word = "ABCCED";
var exist = function(board, word) {
  var row = board.length;
  var col = board[0].length;
  var judge = (i, k, next) => {
      if(i>=row||i<0||k>=col||k<0||board[i][k]!==word[next]) {
        return false;
      }
      if(next==word.length-1) {
          return true;
      }
      var item = board[i][k]
      board[i][k] = '*'
      var res = judge(i+1, k, next+1)||
              judge(i, k+1, next+1)||
              judge(i-1, k, next+1)||
              judge(i, k-1, next+1);
      
      board[i][k] = item;
      return res;
  }

  for(let i=0;i<row;i++) {
      for(let k=0;k<col;k++) {
        if(judge(i, k, 0)) { 
            return true
        }
      }
  }
  return false;
};

console.log(exist(board,word))
