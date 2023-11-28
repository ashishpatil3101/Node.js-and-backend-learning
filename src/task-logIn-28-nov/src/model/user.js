const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new  mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    age:{
        type: Number,
        required: true
    },
    profession: {
        type: String 

   }
   
   
});

userSchema.pre('save', async function (next){

    if (this.isModified('password')){
        const hashedPassword = await bcrypt.hash( this.password, 12);
        this.password = hashedPassword;
    }
    
    next();
})

userSchema.methods.createToken = async  function ( ){

    const token = await jwt.sign( this.userName, process.env.SECRET_KEY);
   
    return token;
}



const User = mongoose.model("User", userSchema);

module.exports = User;