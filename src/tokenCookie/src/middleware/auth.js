const jwt = require('jsonwebtoken');
const userModel = require('../model/user');

const verifyToken = async( req,res, next )=>{

    try {
        const cookieToken = req.cookies.jwt
        const secretKey = process.env.SECRET_KEY
        const tokenPayLoad = await jwt.verify( cookieToken, secretKey );

        const user =  await userModel.findOne({ _id: tokenPayLoad._id})
        console.log(tokenPayLoad, user)
        if(user) {
            req.user = user;
            next();
        }
        else throw new Error('failed to authenticate user')
    } 
    catch (error) {
       next(error)  
    }

}

module.exports= verifyToken;