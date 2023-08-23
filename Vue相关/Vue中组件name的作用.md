# 组件name的作用

## 1、keep-alive中的exclude

```html
<keep-alive exclude="home">
	<router-view/>
</keep-alive>
```

在keep-alive中不需要缓存的组件名，需要用到对应组件的name。

## 2、组件递归调用

```html 
<div v-if="item.children" >      
	<detail-list :list="item.children"></detail-list>     </div>    
</div>
<script>
    export default {  
        name:'DetailList',//递归组件是指组件自身调用自身  			props:{    list:Array  }}
</script>
```

指在自己的组件中调用自己，则用到name。

## 3、devtool调试中显示的是组件name

