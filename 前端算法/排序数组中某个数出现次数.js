function GetNumberOfK(data, k)
{
  // write code here
  let index = data.indexOf(k)
  if(index===-1) {
    return 0;
  }
  let i=index;
  let count = 1;
  while (data[++i]==k) {
    count++;
  }
  return count;
}