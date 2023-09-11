var findAnagrams = function(s, p) {
    let left=0,right=0;
    let targetLen = p.length;
    let result = [];
    let count = new Array(128).fill(0);
    for(item of (p.split(''))) {
        count[item.charCodeAt()]++;
    }
    while(right<s.length) {
        if (count[s[right].charCodeAt()] > 0) {
            count[s[right++].charCodeAt()]--;
            if (right-left===targetLen) {
                result.push(left)
            }
        } else {
            count[s[left++].charCodeAt()]++;
        }
    }
    return result;
};

console.log(findAnagrams("baa", "aa"));