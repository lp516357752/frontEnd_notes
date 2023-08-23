const redis = require('redis');
const config = require('./config')
let client = redis.createClient(config.port,config.host)

client.on('ready',function(res){
    console.log('ready');
});





module.exports = client;