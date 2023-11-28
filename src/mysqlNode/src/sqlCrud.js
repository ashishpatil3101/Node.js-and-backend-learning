const connection= require('./dbConnection')

const readData = () => {
    connection.query('select * from user', (err, result)=>{

    if(err){
        throw err;
    }
    console.log( result)

  })
}

const insertData = ()=>{

    const insertedValue = [ '30','john', 'doe' ]
    const customQuery = 'insert into user (roll_no, name, last_name) values (?,?,?)'
   
    connection.query( customQuery, insertedValue, (err, result)=>{
        if(err){
            throw err;
        }
        console.log( result)
    })

}


const updateData = ()=>{
   
    const roll_no = 5;
    const customQuery = 'update user set name= ? where roll_no= ?'
    const parameter = ['vinod', 5];

    connection.query( customQuery, parameter, (err, result)=>{

        if(err) throw err;
        
        console.log('user data updated succesfully')
    })
}

const deleteData = ()=>{

    const customQuery = 'delete from user where roll_no= ?';
    const parameterList =[4];

    connection.query( customQuery, parameterList, (err, result)=>{

        if(err) throw err;
        console.log( result);
    })
}





module.exports = {
    readData,
    insertData,
    updateData,
    deleteData

}
