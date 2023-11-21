const bcrypt = require('bcrypt')

const passordHashing = async(inputPassword)=>{

    const hashedPass = await bcrypt.hash(inputPassword,10);//returns hash value
    console.log(hashedPass);

    const isPassCorrect = await bcrypt.compare( inputPassword, hashedPass);//returns true / false

    console.log(`password is ${isPassCorrect}`)
}

passordHashing("vaibhav");