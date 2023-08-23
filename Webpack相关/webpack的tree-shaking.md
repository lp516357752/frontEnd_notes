# 性能优化之Tree-shaking

抖动树，即把模块中的中一些不可能运行、不影响输出、无用的、未引用的代码(功能)自动移除，减小JS文件的体积，以及运行代码时的资源消耗。

tree-shaking所依赖的一些es6 module特性：

* 只能作为模块顶层的语句出现
* import的模块名只能是字符串常量
* import binding时immutable的

基于es6模块的特性：静态分析的特点，在运行之前就可以确定各个模块之间的关系。



## 官网说明

1、

```json
{
  "name": "your-project",
  "sideEffects": false
}
```

表示全文件无副作用，webpack可安全的删除无用代码。

2、

```json
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js",
      "*.css"
  ]
}
```

项目使用了css-loader并导入了css文件时，应把css文件加入到不需要webpack删除代码文件数组中。



使用方法总结：

1. 使用es6的import/export语法进行模块的导入导出
2. 在package.json中配置sideeffects属性，设置具有“副作用”文件，让webpack不去随意删除该文件的代码
3. 使用一个压缩工具来删除无用的代码(dead code)，如uglyfyJSPlugin