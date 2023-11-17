const mongoose = require('mongoose');

//to connect mongodb And creation of db if not exist
//will returns promise
mongoose.connect('mongodb://127.0.0.1:27017/abcTwo')
.then(()=> console.log("connnected successfully "))
.catch((err)=>console.log(err))

