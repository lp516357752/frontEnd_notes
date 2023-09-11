var threeSum = function(nums) {
    nums = nums.sort();
    let result = [];
    for(let i=0;i<nums.length;i++) {
        if (nums[i]>0) break;
        if (nums[i]===nums[i-1]) continue;
        let left = i+1, right=nums.length-1;
        while(left<right) {
            let sum = nums[i]+nums[left]+nums[right];
            if (sum===0) {
                result.push([nums[i],nums[left], nums[right]]);
                while(nums[left]===nums[left+1]){left++};
                while(nums[right]===nums[right-1]){right--};
                left++
                right--
            } else {
                if (sum<0) {
                    left++
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};
let res = threeSum([-1,0,1,2,-1,-4]);
console.log(res);