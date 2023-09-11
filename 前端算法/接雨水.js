var trap = function(height) {
    let length = height.length;
    if (length<3) {
      return 0;
    }
    let res = 0;
    let left = [];
    let right = [];
    left[0] = height[0];
    for(let i=1;i<height.length;i++) {
        left[i] = Math.max(height[i], left[i-1]);
    }
    right[length-1] = height[length-1];
    for(let i=height.length-2;i>=0;i--) {
        right[i] = Math.max(height[i], right[i+1]);
    }
    for(let i=0;i<length;i++) {
        res+= Math.min(left[i], right[i]) - height[i];
    }
    return res
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))