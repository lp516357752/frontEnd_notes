[toc]

# vue-router的原理——基于浏览器的hash模式和history模式（校招问个锤子的源码）

两种模式都能做到不刷新页面的情况下修改url；

- [ ] 浏览器的hash和history
- [ ] vue-router的挂载相关

## 一、浏览器的hash模式和history模式

### 1、hash模式：

> ​	基于浏览器url组成的hash部分 的“#”符号，最开始的作用是用于页面的锚点跳转导航。跳转时，通过改变hash的值。
> ​	即#后面的数据来跳转到页面不同的位置。此时会触发hashchange事件，vue-router通过监听该事件来更换页面的显示。#符号不会传到服务端。

### 2、history模式：

> ​	HTML5发布的新的浏览器API，除去了hash模式相对不够美观的#符号。通过栈的模式来进行储存页面记录和进行跳转。并不会刷新当前页面，只是在浏览记录上进行操作
>
> ​	history.pushState(data, title, url)：新增一个页面，将新增的页面压入记录栈中。会多增加一个浏览记录。
> ​	history.replaceState(data, title, url)：替换当前页面的记录，浏览记录栈不会多增加长度。
>
> ​	事件监听：onpopstate事件，只能通过浏览器点击前进、回退、go、forward、back才能发出事件，上面两个方法无法产生该事件。

hash模式，回退到一个不存在的页面并不会产生404页面未找到、而history模式则会产生该问题。

---

**进度**

- [ ] 浏览器的hash和history
- [ ] vue-router的挂载相关

---



## 二、vue-router的挂载相关

### 1、Vue.use方法

​	当安装完vue-router(vuex)，配置好index.js之后，我们需要再main.js中引用这个router，其中会用到Vue.use()来安装这个功能，其中将用到vue.install方法。

### 2、Vue.install方法

​	在install方法中，首先会判断是否已经安装了传入的功能组件，已经安装则会直接返回。

​	源代码：

```javascript
 Vue.mixin({
      beforeCreate: function beforeCreate () {
        if (isDef(this.$options.router)) {//判断是否传入了router，isDefined?
          this._routerRoot = this;//获得Vue根组件
          this._router = this.$options.router;//获取router组件
          this._router.init(this);//初始化router
          /*对router的_route属性设置响应化，即_route改变，自动调用render方法更新视图*/
          Vue.util.defineReactive(this, '_route', this._router.history.current);
        } else {//普通实例
          this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
        }
        registerInstance(this, this);//实例化对象
      },
      destroyed: function destroyed () {
        registerInstance(this);
      }
    });
```



> 核心：Vue.mixin({beforeCreate: function beforeCreate(){}})
>
> 通过vue的混入功能，将一个钩子函数混入到每个vue实例的初始化生命周期中，让每个实例都可以获得router的功能。



