const obj = {
    name: "vabh",
    sName: "patil",
    
}

//converting js object to JSON
const json_obj = JSON.stringify( obj );// returns => {"name":"vabh","sName":"patil"}
console.log( json_obj );

//converting json to object
const convertedOBj = JSON.parse( json_obj );//returns => { name: 'vabh', sName: 'patil' }  
console.log( convertedOBj );