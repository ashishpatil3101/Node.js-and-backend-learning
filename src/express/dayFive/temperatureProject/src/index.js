const express  = require('express');
const axios = require('axios');


const createAndRunServer = ()=>{

    const app = express();

    app.get('/' ,(req,res)=>{

        res.send("welcome to home page")
    })
    
    app.get('/age', async(req,res)=>{
        
        console.log(req.query.name)
        const response = await axios.get(`https://api.agify.io/?name=${req.query.name}`);
        const { name, age, count } = response.data;

        const resultString = `hello, according to my calculcation the name ${name} has age ${age}`
        res.send(resultString)

    })




    app.listen( 3000, ()=>{
       console.log("server has started")
    })
}
createAndRunServer();