const mongoose = require('mongoose');


const userSChema  = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: Number
})


//model is interface to the database for creating ,querying,CRUD
const UserModel = mongoose.model("User", userSChema);

module.exports = UserModel;