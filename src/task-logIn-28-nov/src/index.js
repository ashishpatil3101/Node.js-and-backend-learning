require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/database');
const userRouts = require('./routs/user');

const createAndRunServer = ()=>{
    const app = express();
    app.use( express.urlencoded( {extended: true}));//This middleware is used to parse incoming request bodies with URL-encoded data
    app.use( express.json()); //This middleware is used to parse incoming request bodies with JSON data
    app.use(cookieParser());
    app.use(userRouts);

    app.listen(3000, ()=>{
        
        console.log('server is up and running');
        dbConnect();

    })
}

createAndRunServer();