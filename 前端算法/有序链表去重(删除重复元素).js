function deleteDuplication(pHead)
{
  if(pHead==null){
    return null;
  }
  let list = {};
  let pre = pHead;
  let cur = pHead.next;
  while(cur){//当需要去除所有重复元素，必须要有这一步，否则会保留一个
    if(pre.val==cur.val){
      list[pre.val]="true"
    }
    pre=pre.next;
    cur=cur.next;
  }
  let root = {};
  root.next = pHead;
  pre = root;
  cur = pHead;
  while(cur){
    if(list[cur.val]){
      cur=cur.next;
      pre.next=cur;
    }else{
      pre=pre.next;
      cur=cur.next;
    }
  }
    return root.next;
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
