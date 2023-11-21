const mongoose = require('mongoose');
const express = require('express')

const app = express();
app.listen( 3000, ()=>{
    console.log('server has started')
})

app.use( express.json());


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
const createAndInsertNewDoc= async( req)=>{

    try{
         
        if( Object.keys(req.body).length === 0) throw new Error('please provide user info')
        //create and insert 
        const newUserDocument = new UserModel({
            name: req.body.name,
            email: req.body.email
        });

        //insert
        const result = await newUserDocument.save();//async task so it returns instance of model 
        
        return result;
    }
    catch(error){
        throw error;
    }

}
const errorHandler = (err, req,res, next)=>{

    err.statusCode = err.statusCode || 500;

    return res.status( err.statusCode ).json({
        success: false,
        error : err.message
    })
}

app.post('/user',async (req, res,next)=>{

    try {
        console.log( req.body)
        const result =  await createAndInsertNewDoc( req);

        return res.status(201).json({
            message: 'user saved succesfully',
            data: result
            
        })
    } catch (error) {
        
        let err = new Error("not able to create the user");
        err.statusCode = 400;
        next(err);

    }
} , errorHandler)


// createAndInsertNewDoc();
