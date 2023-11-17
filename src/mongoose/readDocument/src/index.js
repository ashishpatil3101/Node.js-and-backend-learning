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


//read document
const readDoc = async()=>{

    try {

        //const result = await UserModel.find({name: 'vabh'});//returns model instance and we can pass conditon
        // const result = await UserModel.find();//returns all docs
        // const result = await UserModel.find({name: 'vabh'}).limit(1);//returns only one doc 
        
        // const result = await UserModel.find({name: 'vabh'})
        // .limit(1)
        // .select({email: 1});//returns first mathcing doc with email field on it by default id field will be there
        
        const result = await UserModel.findOne({name: 'vabh'});//returns model instance
        console.log(JSON.parse(JSON.stringify(result)))
        
    } catch (error) {
        console.log(error)
    }
}

readDoc();