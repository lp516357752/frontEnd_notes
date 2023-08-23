/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
  //write code here
  if(pHead1==null||pHead2==null){
    return null;
  }
  let p1 = new ListNode(null)
  let p2 = new ListNode(null)
  p1 = pHead1
  p2 = pHead2
  while(p1!=p2) {
    if(p1==null&&p2==null){//特别注意边界情况：最终都为null
      return null;
    }

    if(p1==null) {
      p1=pHead2;
    }else{
      p1=p1.next;
    }
    if(p2==null) {
      p2=pHead1;
    }else{
      p2=p2.next;
    }
  }
  return p1;
}