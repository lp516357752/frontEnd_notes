var maxDistToClosest = function(seats) {
    let left = 0;
    let index = 0;
    let max = 0;
    let maxStart = 0;

    while(index<seats.length){
        if (seats[index]===0) {
            left = index;
            while(seats[index]===0) {
                index++;
            }
            var dis = 0;
            if (index>seats.length-1 || left===0) {
                dis = index-left;
            } else {
                dis = Math.floor((index+left+1)/2)-left;
            }
            if (dis > max) {
                max = dis;
                maxStart = left;
            }
        } else {
            index++
        }
    }
    return max;
};

let res = maxDistToClosest([1,0,0,0,1,0,1]);
console.log(res);