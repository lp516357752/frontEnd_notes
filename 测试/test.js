let start = 5;
    let arr = ['dword','dd','da','dc','dword','d'];
let res = "";
    while(true) {
        cur = arr[start];
        res+=cur;
        arr.splice(start,1);
        let lastWord = cur[cur.length-1];
        let filter = arr.filter(item => { //获取首字母符合的单词
            return item.startsWith(lastWord);
        }).sort();
        if (!filter.length) {//找不到
            break;
        }
        let maxLength = filter[filter.length-1].length;//找到最长单词
        start = arr.findIndex(item => item===filter.find(item => item.length===maxLength));
    }
    console.log(res);