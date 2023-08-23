var express = require('express');
var router = express.Router();
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
var sql = require('../public/javascripts/mysql/sqlConnection')

router.post("/deleteMusicByName", function (req, res) {
    let form_name = req.body.form_name;
    let sqlCreator = new SqlOperation("music");
    let statement = sqlCreator.delete({form_name: form_name});
    sql.myQuery(statement, function (err, result) {
        if (err) {
            res.send({success: false, message: err})
        }else{
            res.send({success: true})
        }
    })
})

router.get("/getMusics", function (req, res) {
    let sqlCreator = new SqlOperation("music_form");
    let statement = sqlCreator.query(["*"]);
    sql.myQuery(statement, function (err, result) {
        res.send(result);
    })
})

module.exports = router;