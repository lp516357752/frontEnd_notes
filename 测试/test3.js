let line = '()abcdefgAC(a)(Ab)(C)';
    let stack = [];
    let special = new Set();
    let resArr = [];
    for(let i=0;i<line.length;i++) {
        let cur = line[i];
        if (cur===')') {
            let temp = "";
            while(true){
                let item = stack.pop();
                if (item==="(") break;
                temp += item;
            }
            temp = temp.toLowerCase().split('');
            if (temp.length>1) {
                for (let index = 0; index < temp.length; index++) {
                    const element = temp[index];
                    special.add(element)
                }
            }
        } else {
            stack.push(cur);
        }
    }
    let tempArr = Array.from(special).sort();
    for (let index = 0; index < stack.length; index++) {
        const element = stack[index].toLowerCase();
        if (special.has(element)&&special) {
            resArr.push(tempArr[0]);
        } else {
            resArr.push(element);
        }
    }
    if (!resArr.length) {
        console.log('0');
    } else {
        console.log(resArr.join(''));
    }