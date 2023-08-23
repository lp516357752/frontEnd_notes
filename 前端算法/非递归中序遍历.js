var inorderTraversal = function(root) {
  var stack = [];
  var res = [];
  var item = root;
  while(item||stack.length!=0) {
      if(item) {//如果左节点不为空
        stack.unshift(item);
        item = item.left;
      }else{
        item = stack.shift();
        res.push(item.val)
        item = item.right;
      }
  }
  return res;
};