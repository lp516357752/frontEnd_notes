var express = require('express');
var router = express.Router();
var authNumber = require('../public/javascripts/picAuth/picAuthConfig')
var multiparty = require('multiparty')
const fs = require("fs");
const {SqlOperation} = require('../public/javascripts/mysql/sqlOperation')
const sql = require('../public/javascripts/mysql/sqlConnection')


router.get("/getPictureAuth", function (req, res) {
    res.send({token:authNumber});
})

router.post("/uploadPicture", function (req, res) {
    let form = new multiparty.Form();
    // 设置文件存储路径，以当前编辑的文件为相对路径
    form.uploadDir = './public/images';
    // 设置文件大小限制
    //form.maxFilesSize = 1 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.log(err);
            res.send("错误")
        } else {
            let inputFile = files.file[0];
            let fileName = inputFile.path.slice(14);
            let url = "http://localhost:3000/"+fileName;//获得图片名
            let sqlCreator = new SqlOperation("article_picture");
            let statement = sqlCreator.insert([null,fileName, url]);
            sql.myQuery(statement, function (err, result) {
                if(err) {
                    res.send({ success: false});
                }else{
                    res.send({ success: true ,url:url});
                }
            })

        }
    })
})

router.post("/removePicture", function (req, res) {
    let filepath = req.body.picture;
    filepath ="public/images/" + filepath.slice(22)
    fs.unlink(filepath, function(err){
        if(err){
            console.log(err);
            res.send({success: false,message: err})
        }else{
            let name = req.body.picture.slice(22);
            let sqlCreator = new SqlOperation("article_picture");
            let statement = sqlCreator.delete({picture_name:name});
            sql.myQuery(statement, function (err, result) {
                if(err) {
                    res.send({ success: false});
                }else{
                    res.send({success: true})
                }
            })

        }

    })
})

module.exports = router;