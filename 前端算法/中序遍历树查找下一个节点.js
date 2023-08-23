//记得中序遍历的顺序，左 根 右
function GetNext(pNode)
{
    // write code here
    if(pNode==null){
      return null;
    }
    if(pNode.right!=null){//有右子树，直接找右子树的最左节点
      let Node = pNode.right; 
      while(pNode.left!=null) {
        Node=pNode.left;
      }
      return Node;
    }
    while(pNode.next!=null){//没有右子树，找父节点，直到父节点的左节点为该节点
      if(pNode.next.left==pNode){
        return pNode.next;
      }
      pNode = pNode.next;
    }
    return null;
}