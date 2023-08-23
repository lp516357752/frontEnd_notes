var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')
var myRes = require('../public/javascripts/response/myRes')
var TokenCreator = require('../public/javascripts/token/tokenOperation')
var svgCaptcha = require("svg-captcha");

router.post('/updateNickName', function (req, res) {
  let sqlCreator = new SqlOperation("user_info");
  let userId = req.body.userId;
  let newName = req.body.newName;
  let statement = sqlCreator.update({info_name:newName}, {user_id:userId})
  sql.myQuery(statement, function (err, result) {
    if(err) {
      res.send({success: false,message: err});
    }else{
      res.send({success: true});
    }
  })
})

router.post('/register', function(req, res, next) {
  let sqlCreator = new SqlOperation("user");
  let userData = req.body.userInfo;
  let statement = sqlCreator.insert([null, userData.account, userData.password, "游客"]);
  sql.myQuery(statement, function (err, result){
    if(err) {
      let data = {};
      data.success = false;
      data.message = "注册失败";
      data.status = "ER_DUP_ENTRY";
      res.send(data);
    }else{
      let date = new Date();
      let userId = result.insertId;
      let userName = "游客";
      let joinTime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      let statement = `insert into user_info(user_id, info_name, info_join_time) values (${userId},'${userName}','${joinTime}')`;
      console.log(statement);
      sql.myQuery(statement, function (err, result){
        let data = {};
        if(err) {
          data.success = false;
          data.message = "注册失败";
          res.send(data);
        }else{
          data.success = true;
          data.message = "注册成功";
          res.send(data);
        }
      })

    }

  })
});

router.post('/login', function(req, res, next) {
  let sqlCreator = new SqlOperation("user");
  let userData = req.body.userInfo;
  console.log(userData);
  let user_account = userData.account;
  let user_pwd = userData.password;
  let statement = sqlCreator.query("*",{user_account:user_account,user_pwd:user_pwd});
  new Promise((resolve, reject) => {
    sql.myQuery(statement, function (err, result){
      if(result.length>0){//找到用户
        if(result[0].user_account===user_account&&result[0].user_pwd===user_pwd) {//账号密码都正确
          console.log("请求用户账户");
          resolve(result[0]);
        }
      }else{//没找到用户
        new Promise(resolve=>{
          let sqlCreator = new SqlOperation("user");
          let statement = sqlCreator.query("*",{user_account:user_account});//判断账号是否存在
          sql.myQuery(statement, function (err, result){
            resolve(result);
          })
        }).then(result=>{
          if(result.length>0&&result[0].user_account===user_account){//通过账号找到了信息，则密码错误
            myRes.success = false;
            myRes.message = "密码错误";
            res.send(myRes);
          }else{//账号错误
            myRes.success = false;
            myRes.message = "账号不存在";
            res.send(myRes);
          }
        })
      }
    })
  }).then(result=>{
    return new Promise(resolve=> {
      let sqlCreator = new SqlOperation("user_info");
      let statement = sqlCreator.query(["*"], {user_id:result.user_id});
      sql.myQuery(statement, function (err, r) {
        let joinTime = r[0].info_join_time;
        joinTime = joinTime.getFullYear()+"-"+(joinTime.getMonth()+1)+"-"+joinTime.getDate();
        r[0].info_join_time = joinTime;
        resolve({userData:r[0],userPower:result.user_power})
      })
    })
  }).then(result=>{
    let dataset = {}
    dataset.success = true;
    dataset.data = result.userData;
    dataset.data.user_power = result.userPower;
    let tokenCreator = new TokenCreator();
    dataset.token = tokenCreator.createToken(user_account);
    res.send(dataset);
  })
});

router.get('/getVerificationCode', function(req, res, next) {
  // 验证码，对了有两个属性，text是字符，data是svg代码
  var code = svgCaptcha.create({
    // 翻转颜色
    inverse: false,
    // 字体大小
    fontSize: 36,
    // 噪声线条数
    noise: 3,
    // 宽度
    width: 80,
    // 高度
    height: 30,
  });
  // 保存code,忽略大小写
  // 返回数据直接放入页面元素展示即可
  res.type('svg');
  res.send({code:code.text,image:code.data});
});
module.exports = router;
