var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var jwt = require('express-jwt')
var tokenOperation = require('./public/javascripts/token/tokenOperation')
var whiteList = require('./public/javascripts/token/whiteList')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var articleRouter = require('./routes/article');
var articleTypeRouter = require('./routes/articleType');
var pictureRouter = require('./routes/picture');
var homeRouter = require('./routes/home');
var commentRouter = require('./routes/comment')
var musicRouter = require('./routes/music')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));//不用再使用bodyparser(true或false表示是否需要解析嵌套数据)
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/images')));


//set allow cross origin
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  // res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  if(req.method === "OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
  else  next();
});
//注册中间件，相当于配置一个全局 token 验证，unless 就是上面说的白名单
//把不需要 token 验证的请求填进 path 里即可, 支持数组、字符串、正则
let tokenCreator = new tokenOperation();
app.use(jwt({ secret: tokenCreator.getSecretKey(), algorithms: [tokenCreator.getAlgorithm()]})
    .unless({path: whiteList}));
//token验证失败错误处理
app.use(function (err, req, res, next) {
  // console.log(err)
  if (err.name === 'UnauthorizedError') {
    res.status(401).send("未授权的访问！")
  }
})


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/article', articleRouter);
app.use('/articleType', articleTypeRouter);
app.use('/picture', pictureRouter);
app.use('/home', homeRouter);
app.use('/comment', commentRouter);
app.use('/music', musicRouter),



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//process.env.PORT = "8081"//

module.exports = app;
