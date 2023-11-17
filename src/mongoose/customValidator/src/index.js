const mongoose = require('mongoose');


//connect to mongodb server create db ifnot exist
mongoose.connect('mongodb://127.0.0.1:27017/abcTwo')
.then(()=> console.log("connected succesfully"))
.catch((err)=> console.log(err))


//create schema
const userSChema  = new mongoose.Schema({

    name:{ 
        type: String,
        // validate(va){
        //     if( va.length < 3 )throw new Error("name cannot be less than 3 chars")
        // },
        validate: {
            validator:function(v){
                console.log(v)
                return v.length >= 3
            },
            message: 'name cannot be less than 3 chars'
        }

    },
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
            name: "va",
            email: "patilffOwhvzzvhhwwNrrje@gmail.com"
        });

        //insert
        const result = await newUserDocument.save();//async task so it returns promise 
        console.log(result);
    }
    catch(err){
        console.log(err);
    }

}
createAndInsertNewDoc();