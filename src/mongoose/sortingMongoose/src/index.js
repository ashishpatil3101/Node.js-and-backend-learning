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


//read document with  sorting 
//.sort( { fieldValue: 1 0r -1 }) 
//1 asc 
//-1 desc
const readDocWithSort= async()=>{

    try {
 
        const result =await  UserModel.find().sort( { name: -1})
        // console.log(result)//returns instace model
       
        console.log(JSON.stringify(result,null,2))
        
    } catch (error) {
        console.log(error)
    }
}

readDocWithSort();