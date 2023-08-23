# CSS命名冲突的解决

## 1、BEM规范

即Block—Element—Modifier的命名规范

* Block，即一块页面大区域，如轮播图(swiper)、布局(layout)、文章(article)
* Element，即区域内的具体元素，如轮播图图片(swiper_img)、容器(swiper_container)、文章标题(article_title)
* Modifier，一般表示元素的一种状态，如选中状态的按钮(navbar_button-selected)、展开状态的侧边栏(layout_asider_expand)

## CSS in JS

即在JS中书写CSS样式对象

```js
const style = {
    width: "100px";
    height: "100px";
}
```



灵活、不存在冲突可能、应用更广泛（如一些移动端不支持CSS，就可以用这种方法）

但书写不方便，JS内容冗余



## 3、CSS module



模块化CSS，将不同的CSS写在不同的文件中，分开引用，使用webpack构建工具合并成一个文件

CSS-loader，需要配置css-loader的modules设置为true。

思想就是css-loader会把样式的类名转化为一个唯一的hash值，虽然内容一样，但引用的类名是不同的，该hash值是根据模块的路径和类型生成的。

## 4、css的预处理器

Less、Sass