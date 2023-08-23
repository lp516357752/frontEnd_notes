function ReverseList(pHead)
{
    // write code here
    let pre = null;
    let next = null;
    while(pHead!=null){
      next = pHead.next;//保存下一个节点
      pHead.next=pre;//指向反向的节点
      pre=pHead;//移动位置
      pHead=next;//移动位置
    }
    return pre;
}