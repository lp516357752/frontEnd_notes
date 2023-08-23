var lengthOfLongestSubstring = function(s) {
  if(s.length<2) {
      return s.length;
  }
  var set = new Set();
  let l = 0;
  let r = 0;
  let res=0;
  while(r<s.length) {
    while(set.has(s[r])) {//删除set中已存在目前窗口的值中的值
      set.delete(s[l++]);//左指针右移，减小窗口大小
    }
    set.add(s[r++]);//将当前节点重新加入set，右指针右移

    //以上两步为获得一个有效长度的连续的子序列
    res = Math.max(res,r-l)
  }
  return res;
};
let len = lengthOfLongestSubstring("pwwkew");
console.log(len)