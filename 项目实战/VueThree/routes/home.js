var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')
var myRes = require('../public/javascripts/response/myRes')
var TokenCreator = require('../public/javascripts/token/tokenOperation')

router.get('/getUserInfoByToken', function(req, res, next) {
    let tokenOperator = new TokenCreator();
    let token = req.headers.authorization;
    token = token.slice(7);
    tokenOperator.verifyToken(token).then(result=> {
        let userId = result.userId;
        let sqlCreator = new SqlOperation("user");
        let statement = sqlCreator.query(["user_id",'user_power'], {user_account: userId});
        return new Promise((resolve,reject) => {//查找用户id
            sql.myQuery(statement,function (err,result) {
                 if(err) {
                     reject(err);
                 }else{
                     resolve(result[0]);
                 }
            })
        }).then(result=> {
            return new Promise((resolve, reject) => {
                let sqlCreator = new SqlOperation("user_info");
                let statement = sqlCreator.query(["*"], {user_id: result.user_id});
                let power = result.user_power;
                sql.myQuery(statement,function (err,result) {//根据用户账号查找用户信息
                    if(err) {
                        reject(err);
                    }else{
                        result[0].user_power = power;
                        resolve(result[0]);
                    }
                })
            }).then(result=> {//包装用户信息并返回
                myRes.success = true;
                let joinTime = result.info_join_time;
                joinTime = joinTime.getFullYear()+"-"+(joinTime.getMonth()+1)+"-"+joinTime.getDate();
                result.info_join_time = joinTime;
                myRes.token = tokenOperator.createToken(userId);
                myRes.data = result
                res.send(myRes);
            })
        },reject=>{
            myRes.success = false;
            myRes.message = "token自动登录失败,错误："+ reject;
            res.send(myRes);
        })

    })


});

module.exports = router;