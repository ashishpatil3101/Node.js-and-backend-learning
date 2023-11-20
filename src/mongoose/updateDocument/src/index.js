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


//findByIdAndUpdate()
//updateOne()

const updateDoc= async()=>{

    try {
 
        const result =await  UserModel.findOneAndUpdate({name: "vaibhav patil one"},{ $set: {name : "vaibhav patil one"}},{new: true });
        //  console.log(result); // returns instance of object
        console.log(JSON.stringify(result))
        
    } catch (error) {
        console.log(error)
    }
}

updateDoc();