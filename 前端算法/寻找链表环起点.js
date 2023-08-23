/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead==null){
      return null;
    }
    let res = [];
    while(pHead.next!=null){
      if(!res.includes(pHead.val)){
        res.push(pHead.val);
        pHead = pHead.next;
      }else{
        return pHead;
      }
    }
    return null;
}