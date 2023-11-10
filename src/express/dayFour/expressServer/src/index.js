const express = require('express')

const crateAndRunServer = ( )=>{

    const app = express()//top level function

    app.get('/about' ,(req, res )=> { 
       res.status(200).send("you are on about page")
     
    })
   

  
    app.listen (3000, ()=>{
        console.log("server  has started")
    })
}

crateAndRunServer();