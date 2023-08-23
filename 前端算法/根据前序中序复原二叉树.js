function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
  // write code here
  if(pre.length==0||vin.length==0) {
    return;
  }
  var num = pre.shift();
  var root = new TreeNode(num);
  root.left = reConstructBinaryTree(pre,vin.slice(0,vin.indexOf(num)));           
  root.right = reConstructBinaryTree(pre,vin.slice(vin.indexOf(num)+1));
  return root;
}

var res =  reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7])
console.log(res.left)