function test(arr) {
    let firstItem =arr[0];
    let firstItemMap = new Map();
    for (let k = 0; k < firstItem.length; k++) {
        const item = firstItem[k];// 单个字母
        if(firstItemMap.has(item)) {
            let time = firstItemMap.get(item) + 1;
            firstItemMap.set(item, time);// 次数增加
        } else {
            firstItemMap.set(item, 1);
        }
    }
    for (let i = 1; i < arr.length; i++) {
        const word = arr[i];//当前单词
        let strs = new Map();
        for (let k = 0; k < word.length; k++) {
            const item = word[k];// 单个字母
            if (!firstItemMap.has(item)) { //后续存在新的字母，则下一个
                continue;
            }
            if(strs.has(item)) {
                let time = strs.get(item) + 1;
                strs.set(item, time);// 次数增加
            } else {
                strs.set(item, 1);
            }
        }
        // strs当前单词与之前单词的公共字母的出现次数
        let tmp = strs;
        if (strs.size < firstItemMap.size) { // 获得最新的公共字母map
            tmp = firstItemMap;
            firstItemMap = strs;
        }
        firstItemMap.forEach((val, key,map) => { //以最少公共字母为对象，比较另一个的字母个数
            let tmpVal = tmp.get(key)
            if (val>tmpVal) {
                map.set(key, tmpVal);
            }
            //当前值小于
        })
    }
    let result = '';
    Array.from(firstItemMap.keys()).sort().forEach(item => {
        let time = firstItemMap.get(item);
        for (let i = 0; i < time; i++) {
            result+=item;
        }
    })
    return result;
}

let res1 = test(["smooth","common","mooorings"])
let res2 = test(["softwares"])
console.log(res1,res2);