var groupAnagrams = function(strs) {
    let map = new Map();
    for(let i=0;i<strs.length;i++) {
        let item = Array.from(strs[i]).sort().join('');
        let mapItem = map.get(item);
        if (mapItem) {
            mapItem.push(strs[i]);
            map.set(item, mapItem)
        } else {
            map.set(item, [item])
        }
    }
    let result = [];
    map.forEach((val, key) => {
        result.push([val]);
    })
    return result;
};
let res = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(res);