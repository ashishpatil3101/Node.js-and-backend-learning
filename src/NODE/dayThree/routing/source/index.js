const http = require('http');
const url = require('url')

const server = http.createServer( ( req, res ) =>{
        
    if( req.url == '/'){
        res.end('welcome to the home page')
    }
    else if( req.url == '/about'){
        res.end('currently learning phase')
    }
    else if( req.url == '/contactus'){

        res.write("hey i amsedning data")
        res.end("you can contact on insta, linkedin")
    }
} )

server.listen(3000, '127.0.0.1' , ( )=>{
    
    console.log('server has started on port 3000')
})