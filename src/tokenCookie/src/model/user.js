const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userScheme = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tokens: String
})

//instance method to create the token
userScheme.methods.createToken = async function(){
    
     
     this.tokens = await jwt.sign({_id: this._id}, process.env.SECRET_KEY);
}

userScheme.pre("save",async function ( next ){
    
  if (this.isModified('password')) {
    console.log("ismodifiled")
    const hashedPass = await bcrypt.hash( this.password ,10);
    this.password = hashedPass;
  }
  
  
  next();
   
})

// User model
const UserModel = mongoose.model('User', userScheme);

module.exports = UserModel;