const express = require('express');

const createAndRunServer = ()=>{

    const app = express();

    app.get('/', (req,res)=>{
        res.send('you are on home page')
    })

    app.get('/*', (req, res,next)=>{
         
        let err = new Error("page does not exist");
        err.statusCode = 404;
        next(err);

    });

    app.use((err, req, res, next)=>{

        err.statusCode = err.statusCode || 500;
        
        res.status( err.statusCode).json({
            message: err.message
        })
    })


    app.listen(3000, ()=>{
        console.log('server is up and running')
    })
}

createAndRunServer();