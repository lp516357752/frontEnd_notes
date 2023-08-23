/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//递归遍历交换左右子树
function Mirror(root)
{
    // write code here
    if(root==null){
      return;
    }
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    Mirror(root.left);
    Mirror(root.right);

    return root;
}