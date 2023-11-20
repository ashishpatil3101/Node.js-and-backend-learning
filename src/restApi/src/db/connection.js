const mongoose = require('mongoose');

//to connect mongodb And creation of db if not exist
//will returns promise
mongoose.connect('mongodb://127.0.0.1:27017/abcThree')
.then(()=> console.log("connnected successfully "))
.catch((err)=>console.log(err))

const dbConnection = ()=>{
    //to connect mongodb And creation of db if not exist
//will returns promise
mongoose.connect('mongodb://127.0.0.1:27017/abcThree')
.then(()=> console.log("connnected successfully "))
.catch((err)=>console.log(err))
}

module.exports =dbConnection;