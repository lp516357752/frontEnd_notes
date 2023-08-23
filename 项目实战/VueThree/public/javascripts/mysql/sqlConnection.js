//set mysql connection
var mysql = require('mysql')
var config = require('./sqlConfig')
var pool = mysql.createPool(config)

function myQuery(sql, callback) {//普通操作
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        console.log("database connected")
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();
        })
    })
}

function getConnectionPool (){//事务操作
    return pool;
}

module.exports = {
    myQuery,
    getConnectionPool
}
