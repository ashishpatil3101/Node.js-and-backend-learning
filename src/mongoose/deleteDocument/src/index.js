const mongoose = require('mongoose');


//connect to mongodb server create db ifnot exist
mongoose.connect('mongodb://127.0.0.1:27017/abcTwo')
.then(()=> console.log("connected succesfully"))
.catch((err)=> console.log(err))


//create schema
const userSChema  = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

//create collection/model 
const UserModel = mongoose.model("User", userSChema);


//deleteOne
//find
const deleteDoc= async()=>{

    try {
 
        const result =await  UserModel.findByIdAndDelete("65574cc0a8df7883456500da")//return instance of object
        // console.log(result)
        console.log(JSON.stringify(result,null,2))
        
    } catch (error) {
        console.log(error)
    }
}

deleteDoc();