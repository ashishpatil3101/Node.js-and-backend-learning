const express= require('express');
const rout = require('./routs/rout');
const dbConnection = require('./db/connection')

const createAndRunServer= ()=>{
     
    const app= express();
    app.use(express.json());
    app.use(rout)

    app.listen(3000, ()=>{
       
        console.log('server has started on port 3000')
        // dbConnection();
    })


}
createAndRunServer();