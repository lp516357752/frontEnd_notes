# 一、JS是单线程，但实际上有四个线程

* ## **JS引擎线程**

  唯一的负责解析执行JS的脚本程序

* ## **事件触发线程**

  不受JS引擎线程控制，负责控制、监听浏览器的事件触发，触发之后会把回调函数放进事件队列中，等待JS引擎线程执行。

* ## **定时器触发线程**

  类似于事件触发线程，负责计时器setTimeout/setInterval的触发、执行，满足触发条件后也会把回调函数放到事件队列中等待JS引擎线程的执行。

* ## **HTTP异步请求线程**

  通过ajax请求连接后开辟的线程，监听readyState状态的改变，也将回调函数推入事件队列，等待主线程执行。

由此可见，虽然有四个线程，但主要代码还是必须等待主线程的执行。



# 二、GUI线程

​	GUI线程负责dom树构建、CSS解析、dom+css渲染成renderObject树以及页面的布局和绘制。

​	当renderObject树更改了样式，则会发生**重绘**，当更改了元素的尺寸、布局、显隐(display，visibility只会重绘)则会发生**回流**。

## 	1、浏览器的自我优化

> ​	**浏览器对于一段代码中频繁改变的样式(颜色、边框)，并不会每一次都会发生重绘/回流，而是会维持一个队列。经过一定时间或者队列长度，才会对队列中的操作flush，整合成一次操作，减少dom的修改次数**
>
> ​	**但对于一些特殊情况则会立即去flush队列，对性能造成影响。如：**
>
> > 1. offsetTop, offsetLeft, offsetWidth, offsetHeight
> >
> > 2. scrollTop/Left/Width/Height
> > 3. clientTop/Left/Width/Height
> > 4. width,height
> > 5. 请求了getComputedStyle(), 或者 ie的 currentStyle

> **因为要给用户获取到最精确的值**

## 2、JS引擎线程与GUI线程是互斥的

​	

```javascript
function jank(second) {
    var start = +new Date();
    while (start + second * 1000 > (+new Date())) {}
  }

  div.style.backgroundColor = "red";

  // some long run task
  jank(5);

  div.style.backgroundColor = "blue";
```

​	对于上段代码，并不会出现红色方块，而是浏览器等待（假死）五秒钟后，出现一个蓝色方块。因为在JS从上往下解析代码时，JS引擎线程还在占用主线程在解析代码，此时无法调换到UI线程渲染界面。在JS解析运行结束后，才把CPU使用权调换给UI线程。

