const jwt = require('jsonwebtoken');

const createToken = async (id)=>{

    const token = await jwt.sign({id: id}, 'secretKey',{
        expiresIn: "1d"
    });
     
    return token;

}

const verifyToken = async(token)=>{
    const verifyTokenRes = await jwt.verify( token, "secretKey")
       
    return verifyTokenRes;
}
module.exports = {verifyToken,createToken }