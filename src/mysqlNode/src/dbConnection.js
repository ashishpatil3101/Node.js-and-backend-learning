const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'abcthree'

})

connection.connect((err)=>{
    if(err) {
        console.log(err);
        return;
    }

    console.log('db connecte succesfully')
})

module.exports = connection;