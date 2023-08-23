function Sum_Solution(n)
{
    // write code here
    let res = 0;
    res = deepSum(n);
    return res;
}

function deepSum(n) {
    return n+ (n>1? deepSum(--n): 0);
}

console.log(Sum_Solution(5));