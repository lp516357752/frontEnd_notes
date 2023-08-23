### SSE(Sever-sent)与Websocket的区别

SSE是客户端接收服务端发送过来的消息，且只能够接受服务端传来的数据，无法做到发送



Websocket即可以接收到服务端的数据，也可以向服务端发送数据。



两者都通过创建对象

SSE(EventSource)和webSocket(webSocket)对象

监听onmessage事件来获得数据。