# 关于typeof

typeof能判断出来的有：

typeof 1：number

typeof "str"：string

typeof true：boolean

typeof new操作符：object

typeof null：object

typeof undefined：undefined

typeof Foo：function



为什么判断null为object？

​	JS底层存储变量信息时，低1~3位存储的是变量的类型

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 1：整数
- null：所有机器码均为0

* undefined：用 −2^30 整数来表示

而所以在判断null时，由于前面开始判断，三位都为0，所以就判断为对象类型了。

**所以在使用typeof判断时，尽量用来判断基本类型**

**Object.prototype.toString也是个很好的方法**

# instanceof

instanceof主要用来判断左边的实例是否属于右边指定的类型

可以用来判断原型链上的类型

## 判断原理

```js
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}

```

即获得右边类型的prototype，左边取实例的__proto__，循环判断左边是否等于右边，直到左边变成了object.__proto__即null，则返回false。

**无法判断数组类型，会判断为object，最优方法是使用Object.prototype.toString.call方法**