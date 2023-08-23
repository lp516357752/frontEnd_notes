/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
  // write code here
  let quick = head;
  let slow = null;
  let index = 1;
  while(quick!=null) {
    if(index==k) {
      slow=head;
    }else if(slow!=null){
      slow=slow.next;
    }
    quick=quick.next;
    index++;
  }
  return slow;
}