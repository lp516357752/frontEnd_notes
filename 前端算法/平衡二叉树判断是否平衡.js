/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot==null) {
      return true;
    }
    return Math.abs(theBalance(pRoot.left)-theBalance(pRoot.right)) <=1//本节点子树高度差小于1
    &&IsBalanced_Solution(pRoot.left)&&IsBalanced_Solution(pRoot.right);//递归它的左右子树
}

function theBalance(pRoot) {//求当前节点的高度
  if(pRoot==null) {
    return -1;//中和一下，有子树的时候才会大于0
  }
  return 1 + Math.max(theBalance(pRoot.left), theBalance(pRoot.right));//最高高度
}
