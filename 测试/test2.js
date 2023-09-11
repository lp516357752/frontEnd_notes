
    let times = 4;
    let length = 5;
    let arr = new Array(length);
    if (times<3 || length<3) {
        console.log(-1);
        return;
    }
    let matrix = ['10,6,9,7,6',
        '9,10,6,7,5',
        '8,10,6,5,10',
        '9,10,8,4,9']
    let k=0;
    while(k<matrix.length) {
        let line = matrix[k++]
        let temp = line.split(',').map(Number);
        if (temp.find(item => item>10)) {
            console.log(-1);
            return;
        }
        for(let i=0;i<temp.length;i++) {
            if (arr[i]) {
                arr[i].push(temp[i]);
            } else {
                arr[i] = [temp[i]];
            }
        }
    }
    let maxArr = [];
    arr.forEach((item,index) => {
        maxArr.push({
            id: index,
            value: item.reduce((pre,cur)=> {return pre+cur},0)
        });
    });
    let topArr = maxArr.sort((a,b) => {
        return b.value - a.value;
    }).slice(0,3);
    topArr.sort((a,b) => {
        if (a.value===b.value){
            //计算a，b的分数构成
            let compare = (a,b) => {
                return b-a;
            }
            let aScores = arr[a.id].sort(compare);
            let bScores = arr[b.id].sort(compare);
            let flag = 0;//是否a大于b
            for (let index = 0; index < aScores.length; index++) {
                const as = aScores[index];
                const bs = bScores[index];
                if (as>bs) {
                    flag= true;
                    break;
                } else if(as<bs)  {
                    flag= false;
                    break;
                }
            }
            if (flag) {
                return -1;
            }
        } else {
            return b.value - a.value;
        }
    })
    let result = topArr.map(item => item.id+1).join(',');
    console.log(result);