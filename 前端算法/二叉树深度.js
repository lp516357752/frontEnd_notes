/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    if (pRoot==null) {
      return 0;
    }
    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);
    //叶节点，即时左右为空，让其深度+1    
    let res = left>right? left+1:right+1;

    return res
}
