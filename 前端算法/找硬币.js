// Z国的货币系统包含面值1元、4元、16元、64元共计4种硬币，以及面值1024元的纸币。
// 现在小Y使用1024元的纸币购买了一件价值为N (0 < N \le 1024)N(0<N≤1024)的商品，
// 请问最少他会收到多少硬币？

var m=parseInt(readline());
function count(N) {
    let num = 0;
    let rest = 1024-N;
    let coin = [64,16,4,1];
    num =  coin.reduce((pre,cur) => {
        let i =  Math.floor(rest/cur);
        rest=rest%cur;
        return pre+i;
    },0)
    return num;
}
console.log(count(m))

