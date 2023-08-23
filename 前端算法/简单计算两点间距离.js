var lines = "29 4 -1 18 15 3 -4 15 0"
lines = lines.split(' ').map(Number);
    var R=lines[0];
    if(R==0){
        print("0x");
        return;
    }
    var res1 = Math.sqrt(Math.pow((lines[1]-lines[7]),2)+Math.pow((lines[2]-lines[8]),2))
    var res2 = Math.sqrt(Math.pow((lines[3]-lines[7]),2)+Math.pow((lines[4]-lines[8]),2))
    var res3 = Math.sqrt(Math.pow((lines[5]-lines[7]),2)+Math.pow((lines[6]-lines[8]),2))
    console.log(res1,res2,res3)
    var suc = 0;
    if(res1<=R){
        suc++
    }
    if(res2<=R){
        suc++
    }
    if(res3<=R){
        suc++
    }
    console.log(suc+"x")
    //print(suc+"x")