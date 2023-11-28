const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// @param {Object} req - The request object containing user data in the request body.
// name , userName, password, age ,profession

const  registerUser = async( req, res)=>{

    try {

          const userObject = new User({
            name: req.body.name,
            userName: req.body.userName,
            password: req.body.password,
            age: req.body.age,
            profession: req.body.profession,

          } ) 
          const newUser = await userObject.save();

          res.status(201).json({
            success: true,
            message: "user succesfully registered"
          })
    } 
    catch (error) {
     
      console.log( error)
        res.status(400).json({
            success: false,
            message: "not able to register. please try again"
          })
    }
}

const loginUser = async( req, res)=>{

    try {
       
        const user = await User.findOne({ userName: req.body.userName})
        if( user === null || Object.keys(user).length === 0) throw new Error('please use correct credentials')
        const isPasswordCorrect = await bcrypt.compare( req.body.password, user.password )
        if( !isPasswordCorrect ) throw new Error('please use correct credentials')

        const token = await user.createToken();
        res.cookie( 'jwt', token, {
            expires: new Date(Date.now() + 900000),
            secure: true
        })
        
        res.status(200).json( {
            success: true,
            message: "user authenticated succesfully",
            data: token
        });


    } 
    catch (error) {
        
        res.status(401).send({
            success: false,
            message: 'please use correct credentials'
        })
    }

  
}

const getUserInfo = async( req, res )=>{

    try{
        
        const token = req.cookies.jwt;
        const verifyToken = await jwt.verify( token , process.env.SECRET_KEY );
        const userName = verifyToken; 
        const user = await User.findOne({ userName: userName });
        if(user === null || Object.keys(user).length === 0) throw new Error;
        const userResponseData = {
            userName: user.userName,
            age: user.age,
            profession: user.profession
        }

        res.status(200).json({
            success: true,
            message: "user info fetched succesfully",
            data: userResponseData
        })



    }
    catch(error){
        res.status(400).json({
            success: false,
            message: "not able proceed with request",
            data: {}
        })
    }

}
module.exports= { 
    registerUser,
    loginUser,
    getUserInfo
               
 }