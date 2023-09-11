var moveZeroes = function(nums) {
    let idx = 0, len = nums.length;
    for(let i = 0; i<len; ++i) {
        if(nums[i] !==0) {
            if(idx !== i) {
                nums[idx] = nums[i];
                nums[i] = 0;
            }
            ++idx;
        }
    }
    return nums;
};
let res = moveZeroes([0,1,0,3,12]);
console.log(res);