var maxArea = function(height) {
    let left=0, right=height.length-1;
    let result = 0;
    while(left<right) {
        let curWater = (right-left) * Math.min(height[left],height[right])
        result=Math.max(result, curWater);

        /*说明：对于一个左柱子，其高度比右柱子低，如果想左移右柱子来获取更多水量是不可能的。
        因为宽度变小，但计算高度只会小于等于左柱子高度(最低高度)。所以只能移动左柱子。也就是移动
        最低的柱子
        */
        if (height[left]<height[right]) {
            left++
        } else {
            right--;
        }
    }
    return result;
};
maxArea([1,8,6,2,5,4,8,3,7]);