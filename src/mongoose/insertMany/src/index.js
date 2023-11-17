const mongoose = require('mongoose');


//connect to mongodb server create db ifnot exist
mongoose.connect('mongodb://127.0.0.1:27017/abcTwo')
.then(()=> console.log("connected succesfully"))
.catch((err)=> console.log(err))



const userSChema  = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})


const UserModel = mongoose.model("User", userSChema);


//create and insert document
const createAndInsertNewDoc= async()=>{

    try{

        //create and insert 
        const newUserDocument = new UserModel({
            name: "ganesh aptil",
            email: "patilThree@gmail.com"
        });

        const newONeUserDoc  = new UserModel({
            name: "ashish aptil",
            email: "patilTwo@gmail.com"
        });

        //multiple insert
        const result = await UserModel.insertMany( [newONeUserDoc, newUserDocument] ); 

    }
    catch(err){
        console.log(err);
    }

}
createAndInsertNewDoc();


