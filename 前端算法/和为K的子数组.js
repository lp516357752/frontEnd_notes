var subarraySum = function(nums, k) {
    let que = [];
    let result = 0;
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        let left = i;
        let item = nums[left];
        while(sum<=k&&left<nums.length) {
            item = nums[left];
            que.push(left++);
            sum+=item;

            if (sum>k) {
                que=[];
            } else if (sum===k&&que.length) {
                result++;
                que=[];
            }
        }
        sum=0;
    }
    return result;
};
console.log(subarraySum([1,-1,0], 0))