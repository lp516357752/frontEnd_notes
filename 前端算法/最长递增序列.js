var longestConsecutive = function(nums) {
    let map = new Map();
    for(val of nums) {
        map.set(val, val)
    }
    let res = 0;
    for(val of nums) {
        if (!map.has(val-1)) {
            let right = map.get(val);
            while(map.has(right+1)) {//如果可以继续递增
                right = map.get(right+1);
            }
            map.set(val, right);
            res = Math.max(res, right-val+1)
        }
    }
    return res
};
let res = longestConsecutive([100,4,200,1,3,2]);
console.log(res);