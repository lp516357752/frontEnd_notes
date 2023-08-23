## 关于JS中一些函数的可访问性问题

流氓：in操作符可以访问对象任何位置的属性，只要存在的话

### 1、可以访问自身属性的函数

1. Object.keys()
2. for...in
3. Object.hasOwnProperty()（可以访问自身**所有属性**，包括symbol）
4. Reflect.ownKeys()（可以访问自身**所有属性**，包括symbol）
5. Object.getOwnPropertyDescriptions()（可以访问自身**所有属性**，包括symbol）
6. Object.propertyIsEnumerable（可以访问自身**可枚举属性**，包括symbol）

### 2、可以访问继承属性

1. for...in

### 3、可访问symbol属性

1. Object.hasOwnProperty()
2. Reflect.ownKeys()
3. Object.getOwnPropertyDescriptions()