const express = require('express');

const createAndRunServer = ()=>{

    const app = express();

    const errorMiddleware = (err, req, res, next)=>{

        err.statusCode = err.statusCode || 500;
        
        res.status( err.statusCode).json({
            message: err.message
        })
    }
    const secondMiddleware = (req, res ,next)=>{

        // res.json({message: "hey vaibhav"})
        next(200)
    }

    app.get('/', secondMiddleware ,errorMiddleware )


   
 

    app.listen(3000, ()=>{
        console.log('server is up and running')
    })
}

createAndRunServer();