### JS事件循环机制概要

#### 1、浏览器环境

运行**同步**任务——>运行**异步**任务

异步任务的运行：

先运行**微任务**(Promise，await代码行之后的任务)

再运行**宏任务**(setTimeout/setInterval)



#### 2、Node环境

异步事件循环：

**timer**——pending callbacks——Idle/Prepare——Poll——**check**——close callbacks——>timer······。

同步任务——>process.nextTick(特殊微任务，在一个事件循环结束后立即调用)——> 一般微任务(Promise)。



​	当过期时间设置成相同时，setTimeout与setImmediate出现的顺序不定，受当时进程的性能影响。

setTimeout在**timer**阶段执行（事件循环的第一个阶段）。

setImmediate在**check**阶段执行（在timer之后）。

​	在一个I/O期间内，setImmediate快于setTimeout。