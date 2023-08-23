## 浏览器事件target与currentTarget

target：事件发出的那个元素，如e.target

currentTarget：事件监听所绑定到的那个元素(事件处理函数中的this)。

当在事件发出者身上绑定了监听，则两者相等。当使用了如事件委托，绑定到了父元素身上，则两者不相等。