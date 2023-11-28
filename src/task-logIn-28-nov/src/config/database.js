const mongoose= require('mongoose');

const dbConnect  = ()=>{
     
    const dbUrl = process.env.DATABASE_URL;
    mongoose.connect(dbUrl)
    .then(()=> console.log('db connected succesfully'))
    .catch((err)=> console.log(err.message))
}
module.exports = dbConnect;