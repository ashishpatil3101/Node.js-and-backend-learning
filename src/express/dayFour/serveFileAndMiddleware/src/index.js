const express = require('express')
const path = require('path');



const createAndRunServer= ()=>{

    const app = express();

    //have to give absolute path
    //wil join path segment
    const staticPath = path.join(__dirname,'/public');
    
    //use is built in midddleware 
    //used to add midddleware
    //static() is middle ware used to serv static file
    app.use( express.static(staticPath))
     
    app.listen(3000, ()=>{
        console.log("server has started")
    })
}

createAndRunServer();