const mongoose = require('mongoose');


//connect to mongodb server create db ifnot exist
mongoose.connect('mongodb://127.0.0.1:27017/abcTwo')
.then(()=> console.log("connected succesfully"))
.catch((err)=> console.log(err))

//In Mongoose, a schema defines the structure of a document within a MongoDB collection. 
// It defines the fields, their types, and any other constraints or options for those fields. 
// Schemas provide a way to enforce data integrity and shape the documents stored in the MongoDB collection.

const userSChema  = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})


//model is interface to the database for creating ,querying,CRUD
const UserModel = mongoose.model("User", userSChema);