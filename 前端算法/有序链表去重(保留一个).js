//删除链表中重复数
function deleteDuplication(pHead)
{
  if(pHead==null){
    return null;
  }
  if(pHead.next==null){
    return pHead;
  }
  let list = {};
  list[pHead.val] = "true";
  let res = pHead;
  let root = res;
  while(pHead.next!=null){
    if(!list[pHead.next.val]){//找到了下一个不重复节点
      res.next = pHead.next;
      res = res.next;
      list[pHead.next.val] = "true";
    }
    pHead = pHead.next;
    
  }
    return root;
}
let p = {
  val:1,
  next: {
    val:2,
    next: {
      val:3,
      next: {
        val:3,
        next: {
          val:4,
          next: {
            val:4,
            next: {
              val:5,
              next: null,
            }
          }
        }
      }
    }
  }
}
console.log(deleteDuplication(p));
