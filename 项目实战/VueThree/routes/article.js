var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')
var client = require('../public/javascripts/redis/cache')

router.post("/addLike", function (req, res) {
    let article_id = req.body.article_id;
    let statement = `update article set likes=likes+1 where article_id=${article_id}`
    sql.myQuery(statement, function (err, result) {
        if (err) {
            res.send({success: false, message: err})
        }else{
            res.send({success: true})
        }
    })
})

router.post("/deleteArticleByName", function (req, res) {
    let article_name = req.body.article_name;
    let sqlCreator = new SqlOperation("article");
    let statement = sqlCreator.delete({article_name: article_name});
    sql.myQuery(statement, function (err, result) {
        if (err) {
            res.send({success: false, message: err})
        }else{
            client.del(article_name.slice(8), function (err,v) {
                res.send({success: true})
            })
        }
    })
})

router.post("/fuzzyGetArticleIntro", function (req,res) {
    let articleName = req.body.article_name;
    client.keys(`*${articleName}*`,function(err,v) {
        if(err) {
            console.log(err)
            res.send({success: false, message: err});
        }else if(v.length>0){
            console.log("来自redis");
            res.send({success: true, dataSet:v})
        }else{
            let statement = `select * from article where article_name like '%${articleName}%'`;
            sql.myQuery(statement, function (err, result) {
                if(err) {
                    res.send({success: false, message: err});
                }else{
                    res.send({success: true, dataSet:result})
                }
            })
        }

    });

})

router.post("/getArticleIntro", function (req, res) {
    let articleName = req.body.article_name;
    console.log(articleName)
    client.get(articleName.slice(8),function (err, reply) {
        if(err) {
            let data = {success: false,message:err};
            res.send(data);
        }else if(reply){
            console.log("从redis读取")
            let info = JSON.parse(reply);
            let data = {success: true,data:info};
            res.send(data);
        }else{
            console.log("请求数据库")
            getArticleByName(articleName).then(result=>{
                let article = result.data[0];
                getArticleTypeByName(article.article_name).then(types=>{
                    types = types.data.map((value, index) => {
                        return value.type_name;
                    })
                    let name = article.article_name.slice(8)
                    let articleInfo = {article_name:name,
                        publish_time:article.publish_time,
                        article_type:types};
                    res.send({success: true, data: articleInfo});
                    articleInfo = JSON.stringify(articleInfo);
                    client.set(name, articleInfo, function (){
                        console.log("新缓存增加")
                    })
                })

            });

        }

    })
})

router.get("/getArticleNames", function (req, res) {
    let sqlCreator = new SqlOperation("article");
    let statement = sqlCreator.query(["article_name"]);
    sql.myQuery(statement, function (err, result) {
        res.send(result);
    })
})

router.post("/getArticleByName", function (req, res) {
    let name = req.body.name;
    getArticleByName(name).then(result=>{
        res.send(result)
    })
})

router.post("/publishArticle",function (req, res){
    let article = req.body.article;
    article.articleName = "article_" + article.articleName;//增加前缀
    console.log(article);
    sql.getConnectionPool().getConnection(function (err, conn) {
        conn.beginTransaction(function (err) {
            try {
                if(err) {
                    console.log("开启事务失败");
                    throw err;
                }else {
                    let sqlCreator = new SqlOperation("article");
                    let statement = sqlCreator.insert([null, article.articleName, article.articleText, article.publishTime, article.likes, article.watchers])
                    sql.myQuery(statement, function (err, result) {//插入文章内容
                        if(err) {
                            conn.rollback(()=>{
                                console.log("插入失败，事务回滚!");
                                throw err;
                            })
                        }else{
                            let article_id = result.insertId;
                            article.article_type.forEach(function (val) {
                                if(typeof val==="string"&&val.startsWith("new_")) {
                                    let newType = val.slice(4);
                                    let statement = `insert into article_type values (null, ?)`;
                                    conn.query(statement, newType, function (err,res) {
                                        if(err) {
                                            conn.rollback(()=>{
                                                console.log("插入失败，事务回滚!");
                                                throw err;
                                            })
                                        }
                                        val=res.insertId;
                                        let statement = `insert into article_type_relation values (null, ${article_id}, ?)`;
                                        conn.query(statement, val, function (err, res) {//插入文章类型信息
                                            if(err) {
                                                conn.rollback(()=>{
                                                    console.log("插入失败，事务回滚!");
                                                    throw err;
                                                })
                                            }
                                        })
                                    })
                                }else{
                                    let statement = `insert into article_type_relation values (null, ${article_id}, ?)`;
                                    conn.query(statement, val, function (err, res) {//插入文章类型信息
                                        if(err) {
                                            conn.rollback(()=>{
                                                console.log("插入失败，事务回滚!");
                                                throw err;
                                            })
                                        }
                                    })
                                }
                            })
                            conn.commit(() => {
                                console.log("事务提交成功")
                                let name = article.articleName.slice(8);
                                getArticleTypeByName(article.articleName).then(result=>{//文章介绍存入缓存
                                    let types = result.data.map((value, index) => {
                                        return value.type_name;
                                    })
                                    let articleInfo = {article_name:name, publish_time: article.publishTime, article_type:types};
                                    articleInfo = JSON.stringify(articleInfo);
                                    console.log(articleInfo)
                                    client.set(name, articleInfo, function (){
                                        res.send({success: true,message:"提交成功"});
                                    })
                                });


                            })
                        }
                    })
                }
            }catch (err){
                res.send({success: false,message:err}) ;
            }
            finally {
                conn.release();
            }
        })
    })

})

async function getArticleTypeByName(name) {//通过文章名查找文章类别
    let statement = `select type_name
                    from article_type type left join article_type_relation rela
                    on type.type_id=rela.type_id where rela.article_id in
                    (select article_id from article where article_name='${name}')`;
    let result = await new Promise(resolve => {
        sql.myQuery(statement, function (err, res) {
            if(err) {
                resolve({success: false,message:err})
            }else{
                resolve({success: true,data: res})
            }
        })
    })
    return result;
}

async function getArticleByName(name) {
    let sqlCreator = new SqlOperation("article");
    let statement = sqlCreator.query(["*"], {article_name: name});
    let result = await new Promise(resolve => {
        sql.myQuery(statement, function (err, res) {
            if(err) {
                resolve({success: false,message:err})
            }else{
                resolve({success: true,data: res})
            }
        })
    })
    return result;
}


module.exports = router;