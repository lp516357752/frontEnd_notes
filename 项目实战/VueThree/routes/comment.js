var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')
var myRes = require('../public/javascripts/response/myRes')

router.post('/getCommentsByArticle', function(req, res, next) {
    let sqlCreator = new SqlOperation("comment");
    let articleId = req.body.article_id;
    myRes.data = [];
    new Promise((resolve, reject) => {
        let statement = sqlCreator.query(["*"], {article_id:articleId})
        sql.myQuery(statement, function (err, result){
            if(result&&result.length>0) {
                resolve(result)
            }else{
                reject(err)
            }
        })
    }).then(result=>{
        let promises = [];
        for (let i = 0; i < result.length; i++) {
            let comment = result[i];
            let dataItem = {};
            dataItem.comment = comment;
            let promise = new Promise((resolve,reject)=> {
                let sqlCreator = new SqlOperation("user_info");
                let statement = sqlCreator.query(["*"], {user_id:comment.user_id});
                sql.myQuery(statement, function (err, result) {
                    if(result&&result.length>0) {
                        dataItem.userInfo = result[0];
                        resolve(dataItem)
                    }else{
                        reject(err);
                    }
                })
            })
            promises.push(promise);
        }
        Promise.allSettled(promises).then(result=>{
            myRes.success = true;
            myRes.data = result.map(value => {
                return value.value;
            });
            res.send(myRes);
        }, reject=>{
            res.send({success: false, message: "暂无评论，快来发表你的意见吧！"});
        })
    },rej=>{
        res.send({success: false, message: "暂无评论，快来发表你的意见吧！"});
    })
});

router.post('/publishComment', function(req, res, next) {
    let commentObj = req.body.commentObj;
    let sqlCreator = new SqlOperation("comment");
    let statement = sqlCreator.insert([null,commentObj.comment_text,
        commentObj.user_id, commentObj.article_id,commentObj.comment_date]);
    sql.myQuery(statement,function (err,result){
        if(err){
            console.log(err)
            res.send({success: false});
        }else{
            if(result.affectedRows>0) {
                res.send({success: true});
            }

        }

    })
});
module.exports = router;