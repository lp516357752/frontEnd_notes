/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    //先从父树身上找相同的节点
    //父树找完了都没找到 or 子树为null
    if(pRoot1==null||pRoot2==null){
      return false;
    }
    let res = false;
    //找到第一个相同节点,向内部递归
    if(pRoot1.val==pRoot2.val){
      res = deepfind(pRoot1,pRoot2)
    }
    //未找到
    if(!res){//找左边
      res = HasSubtree(pRoot1.left, pRoot2)
    }
    if(!res){//找右边
      res = HasSubtree(pRoot1.right, pRoot2)
    }

    return res;
}

function deepfind(proot1, proot2){
  if(proot2==null){//子树遍历完毕(无论是子树的左还是右)，说明前面都为true相等。
    return true;
  }
  if(proot1==null){//父树遍历完毕而子树还没，说明不对
    return false;
  }
  if(proot1.val!=proot2.val){
    return false;
  }
  return deepfind(proot1.left, proot2.left)&&
        deepfind(proot1.right, proot2.right);
}