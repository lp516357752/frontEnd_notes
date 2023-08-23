let arr = [
  [1, 2, 3],
  ['3', 4, 5, 5],
  [6, '7', 8, 9, [11, 12, [12, 13, [14]]]],10
]

/*1、 ES6 flat函数 params 表示需要扁平化到的层数，默认为1 ！！！*/
// let newArr = arr.flat(Infinity);
// console.log(newArr)

/*2、 ES6 generator函数 */
function* flatten(arr) {
  for (const item of arr) {
      if (Array.isArray(item)) {
          yield* flatten(item);
      } else {
          yield item;
      }
  }
}
const flattened = [...flatten(arr)];

/*3、 toString()方法也可以，自动删除括号，以逗号分割 */
// let flattened = arr.toString().split(',').map(item => parseFloat(item));

/*4、 JSON.stringfy */
//let flattened = JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map( item => parseFloat(item) )

/* 5、 Array.some方法 */
// while(arr.some(item => Array.isArray(item) ) ) {
//   arr = [].concat(...arr);//这样才能够每次去掉一级，不能直接[...arr]
// }


console.log(flattened)