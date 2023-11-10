const http = require('http');
const url =require('url')
const fs =require('fs')

const server = http.createServer( ( req, res )=>{
     
    
    if( req.url == '/') {res.end("welcome to home page")}
    
    else if( req.url == '/user'){

        const pathFile = `${__dirname}/data.json`;
        const userData = fs.readFileSync( pathFile ,'utf-8') ;
  
        res.end( (userData) )
   
    } 
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log("server has started on port 3000")
})