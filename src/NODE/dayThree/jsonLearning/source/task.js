
const fs = require('fs');

const bioData = {
    name: "vaibhav",
    sName: "patil",
    age: 24,
    msg: "hey , how are you"
}

//convert to json
//add to the diff file
//read the file 
//again convert into json obj to normal obj
//console it


//convert json to js obj
const jsonObj = JSON.stringify ( bioData );

//add to the diff file
fs.writeFileSync("task1.json", jsonObj)

//read the file
const fileData = fs.readFileSync('task1.json');

//convert into js obj
const convertedOBj= JSON.parse( fileData );
//console it
console.log( convertedOBj);