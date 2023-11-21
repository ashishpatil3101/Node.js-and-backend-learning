require('dotenv').config();
const express= require('express');
const bodyParser= require('body-parser');
const dbConnection= require('./db/connection');
const userRout= require('./routs/userRout');

const createAndRunServer = ()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use( userRout );

    app.listen(3000, ()=>{
          
        console.log('server has started');
        dbConnection();

    })
}
createAndRunServer();