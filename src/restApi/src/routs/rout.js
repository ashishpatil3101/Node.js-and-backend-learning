const express= require('express');
const userModel = require('../model/user')

const rout = express.Router();

rout.post('/user', async(req, res)=>{

    try {
        
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        const result = await newUser.save();

        return res.status(201).json({
            data: newUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "not able to create th user"
        })
    }
})
rout.get('/user/:id', async(req, res)=>{

    try {
        

        const result = await userModel.findById(req.params.id);

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message: "not able to fetch th user"
        })
    }
})

rout.put('/user', async(req, res)=>{

    try {
        

        const result = await userModel.findOneAndUpdate({email: req.body.email},{
           age: req.body.age 
        },{new: true});

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message: "not able to update the user"
        })
    }
})

rout.delete('/user/:id', async(req, res)=>{

    try {
        

        const result = await userModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            message: "not able to delete the user"
        })
    }
})

module.exports= rout;


