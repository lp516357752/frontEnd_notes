# diff算法

* 实际的diff操作并不是替换，而是移除——创建——添加。

* diff算法并不一定是最优的dom操作，但在普遍的复杂项目来说，可以在效率和可维护性之间达到平衡
* 就地服用策略，即sameVnode方法，判断新旧节点是否是同类节点，即类型和节点数据(不是value)都相同，这样的节点只会去更新value。
* 只比较同级的节点，若找不到与新节点类型相同的节点，则插入一个新节点，若有相同类型的节点则进行节点属性的更新，最后删除新节点列表中不包含的旧节点。比较函数为sameVnode()。

1. 对于新旧DOM节点列表，分别维护两个指针指向列表首尾(共四个)，从首尾**向中间进行扫描**.
2. 新旧DOM对应指针节点按照上述规则进行比较(如oldStart与newStart)。
3. 若新头对旧尾比较相同，且节点可以移动，则把旧尾放到真实dom列表头部，反之亦然。

## 一、patch算法

patch并不是一次把所有改动综合最后才都加到DOM，而是边寻找差异边patch DOM。

```javascript
function patch (oldVnode, vnode) {
    if (sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode)
    } else {
        const oEl = oldVnode.el
        let parentEle = api.parentNode(oEl)
        createEle(vnode)
        if (parentEle !== null) {
            api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl))
            api.removeChild(parentEle, oldVnode.el)
            oldVnode = null
        }
    }
    return vnode
}
```

* oldVnode和vnode分别表示旧、新**虚拟**节点。

* 1、先通过sameVnode判断两个节点是否值得比较，通过该函数判断两个节点的key和sel来对比。

* 2、不值得比较则进入else，取得旧oldVnode虚拟节点的真实父节点parentEle
* 3、创建新虚拟节点vnode的真实dom，让vnode的真实dom引用.el指向新创建出来的真实dom节点。
* 4、向真实父节点parentEle插入新创建出的节点vnode的引用.el。移除父节点对旧节点oldVnode对dom的引用。

* vnode的改变就是对真实dom的引用从null变成了真实的dom节点。

