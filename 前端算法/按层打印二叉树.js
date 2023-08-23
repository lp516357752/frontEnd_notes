/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Print(pRoot)
{
    // write code here
    let que = [];
    let row = [];
    let res = [];
    if (pRoot==null) {
      return null;
    }
    que.unshift(pRoot);
    let num = 1;//核心变量，记录每一行的节点数
    while (que.length) {
      let item = que.pop();
      if(!item){//如果空节点
        continue;
      }
      num--;
      
      if(item.val){//行节点值加入数组
        row.push(item.val);
      }
     
      if(num==0){//遍历完一行
        res.push(row)
        row=[];
      }

      item.left&&que.unshift(item.left);//有左节点，那么加入到队列中
      item.right&&que.unshift(item.right);
      if(num==0){//当上一层全部遍历完
        num=que.length;
      }

    }
    return res;
}

var a = {
  val: "a",
  left: {
    val: "b",
    left: {
      val: "d",
      left: null,
      right: {
        val: "e",
        left: null,
        right: null
      }
    },
    right: {
      val: "f",
      left: null,
      right: null
    }
  },
  right: {
    val: "c",
    left: {
      val: "g",
      left: null,
      right: null
    },
    right: null
  }
}

var b = {
  val: "5",
  left: {
    val: "4",
    left: {
      val: "3",
      left: {
        val: "2",
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: null,
      left: null,
      right: null
    }
  },
  right: {
    val: null,
    left: null,
    right: null
  }
}


console.log(Print(b));

