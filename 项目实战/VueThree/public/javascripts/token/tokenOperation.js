let jsonWebToken = require('jsonwebtoken');
let jwt = require('express-jwt')
// iss (issuer)：签发人
// exp (expiration time)：过期时间
// sub (subject)：主题
// aud (audience)：受众
// nbf (Not Before)：生效时间
// iat (Issued At)：签发时间
// jti (JWT ID)：编号

class TokenOperation {
    SECRET_KEY;
    algorithm;
    constructor() {
        this.SECRET_KEY = "liao0506";
        this.algorithm = "HS256";
    }
    getSecretKey() {
        return this.SECRET_KEY;
    }
    getAlgorithm() {
        return this.algorithm;
    }
    createToken(userAccount) {
        const token = jsonWebToken.sign({
            // Payload 部分，官方提供七个字段这边省略，可以携带一些可以识别用户的信息。例如 userId。
            // 千万不要是用敏感信息，例如密码，Payload 是可以解析出来的。
            userId:userAccount,

        },this.SECRET_KEY,{
            expiresIn:60*60*24, //token有效期
            algorithm:this.algorithm  //默认使用 "HS256" 算法
        })
        return token;
    }
    verifyToken(token) {
        if(token === undefined){
            return false;
        }else{
            return new Promise((resolve, reject) => {
                jsonWebToken.verify(token, this.SECRET_KEY ,(error, decoded) => {
                    if (error) {
                        reject(error);
                    }else{
                        resolve(decoded);
                    }
                });

            }).then(res=> {
                return res;
            }).catch(error=>{
                return error;
            })
        }
    }
}

module.exports =  TokenOperation;