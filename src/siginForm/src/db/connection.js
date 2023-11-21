const mongoose = require('mongoose');

const makeDbConnection = ()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/abcFive')
    .then(()=> console.log("connnected successfully "))
    .catch((err)=>console.log(err))
}


module.exports = makeDbConnection;