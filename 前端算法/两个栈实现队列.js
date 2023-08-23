var stack1 = [];
var stack2 = [];
function push(node)
{
  // write code here
  stack2.push(node);

}
function pop()
{
  // write code here
  if(stack1.length!=0) {//注意先判断
    return stack1.pop()
  }
  var length = stack2.length; 
  for(let i=0;i<length;i++) {
    stack1.push(stack2.pop());
  }
  return stack1.pop();
}
push(1)
push(2)
push(3)
console.log(pop(),pop())
push(4)
console.log(pop())