###### 	Token实质上只是把合法（已登录）用户的session_id包装了一层，使之不再是明文传输。相对于原始的cookie存储session_id，攻击者即时同样获取到了cookie，也因为无法解密token而无法获取到session_id。

##### 核心：防伪造(针对于服务端)	而非	防拦截

攻击者同样可以拦截获取到用户的token，并用该token冒名访问服务端进行请求。

相比较于cookie，token由于修改即无效，所以会比cookie安全一点。



token可存储与localstorage中，在请求拦截器中自动携带在请求头中。