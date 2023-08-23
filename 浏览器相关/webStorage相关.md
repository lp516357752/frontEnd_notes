# Cookie与WebStorage

## 一、Cookie

大小：4kb

目的：HTTP是无状态协议，为了存储Web中的状态信息

一般由服务端设置cookie：在返回头中设置：“Set-Cookie:name=value;domain=.domain.com”

字段解释：

* name：cookie的名称，不区分大小写。

* value：cookie的字符串值，一般编码后存储。

* domain：cookie属于那个域，在向该域发送请求时将自动带上该包含该域的cookie。其中子域不包含父域，父域包含子域。即“.aliyun.com”对其子域“child.aliyun.com”有效，反之无效。

* path：cookie将要影响的路径，设置后将向制定域中的指定路径发送cookie。同主路径下的页面才能访问对应cookie

* expires：cookie的过期时间戳。不设置时，关闭页面将删除该cookie，存在时间偏差。

* max-age：cookie多久后过期，作用与expires相同，优先于expires。

* http-only：表示cookie仅可用http传输，不可被JavaScript操作，访问。但可以通过request.getCookies()访问

* secure：安全标志，指定后，表示只有https连接才会把发送cookie，但仍不应该把隐私信息放在cookie。

cookie无法手动定位修改，只能添加一个新的cookie，name value domain path都与一个已存在cookie重复，这样才会覆盖。

cookie.setMaxAge(0)：删除一个cookie（不记录cookie）

cookie.setMaxAge(-1)：会话结束，即关闭浏览器就删除cookie

cookie.setMaxAge(60*60)：一个小时过期

### 前端使用cookie

* document.cookie获得的是一串包含所有当前页面的cookie信息字符串。
* 设置cookie也只能通过document.cookie="str"来设置，浏览器会自动匹配对应name等参数来修改或增添（并不友好）

## 二、SessionStorage

MDN文档：

​	应该注意，存储在sessionStorage或localStorage中的数据**特定于页面的协议**。也就
是说`http://example.com` 与 `https://example.com`的sessionStorage相互隔离。

* 用于会话期间的数据存储，即断开会话或关闭页面即删除数据。
* 大小一般为5M。

* 手动创建一个新标签页，是一个新的会话，无法访问其他页面的sessionstoreage，即使是相同url。
* 遵循同源策略，详情见localstorage。
* 通过_blank打开一个标签、window.open、链接打开新页面，可以继承父页面的sessionstorage，但此后两个页面的sessionstorage单独控制，没有关联了。（需要同源）

使用：

```js
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```



## 三、localStorage

可以长期保留，页面关闭仍然存在，需要手动删除数据。

* 大小一般为5M
* 键值类型要求为字符串
* 操作方法与sessionStorage相同
* 可用于页面间通话
* 遵循同源策略，不同源不可访问；同源下，不同页面共享，所以可以用于页面间通话(面试题)。
* 可以通过可以跨域的postMessage方法来传输localstorage数据