const express = require('express');
const dbConncet = require('./dbConnection');
const {
    readData,
    insertData,
    updateData,
    deleteData
   
} = require('./sqlCrud');

const createAndRunServer = ()=>{

    const app = express();


    app.listen( 3000, ()=>{
        console.log('server has strtaed')

        //read data from  user
        // readData();

        //insert new data in user table
        // insertData();

        //update data for user table
        // updateData();

        //delete user from user table
        // deleteData();
})
}

createAndRunServer();