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
        require: true,
        unique: true
    }
})

//create collection/model
const UserModel = mongoose.model("User", userSChema);


//create and insert document
const createAndInsertNewDoc= async()=>{

    try{

        //create and insert 
        const newUserDocument = new UserModel({
            name: "vabh aptil",
            email: "patilONe@gmail.com"
        });

        //insert
        const result = await newUserDocument.save();//async task so it returns instance of model 
        console.log(result);
    }
    catch(err){
        console.log(err);
    }

}
createAndInsertNewDoc();
