一般对于2D，设置position-z来达到层级的效果。但有时对于z相同的场景。或者说物体距离摄像机距离一致时，则一般需要如下方式处理：

第一，关闭某个对象的depthTest, 让它能无视渲染顺序，从而确保其会被渲染，而不会因为depthTest的存在而变得不可见。

第二，关闭某个对象的depthWrite,让该对象的的数据不会被写入gpu的深度缓存中，从而，其他对象在做depthTest的时候，就不会发现它挡在了前面。

第三，人为的设定对象的渲染顺序。每个threejs对象都会有一个renderOrder属性，我们可以人为地配置对象A的renderOrder小于B的renderOrder，这样，就算A按照前文的机制因该渲染在B之后，但由于renderOrder的原因，能而改变此规则，让A渲染在B之前。