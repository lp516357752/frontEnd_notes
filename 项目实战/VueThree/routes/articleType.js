var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')

router.get("/getArticleTypes", function (req, res) {
    let sqlCreator = new SqlOperation("article_type");
    let statement = sqlCreator.list();
    sql.myQuery(statement, function (err, result) {
        if(err) {
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
module.exports = router;