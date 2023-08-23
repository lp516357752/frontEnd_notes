var canVisitAllRooms = function(rooms) {
  let visited = [];
  visited = enter(0, 0, visited, rooms);
  console.log(visited)
};

function enter(cur, num, visited, rooms) {
  visited.push(cur);//房间号
  while(num<rooms[cur].length) {
    if(!visited.includes(rooms[cur][num])) {
      enter(rooms[cur][num], 0, visited, rooms)
    }
    else{
      num++;
    } 
  }
  return visited;
}
canVisitAllRooms([[1,3],[3,0,1],[2],[0]])