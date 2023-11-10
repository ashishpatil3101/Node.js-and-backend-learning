const http = require('http') //consume module

//crate server
const server = http.createServer(  ( req, res ) => {
     res.end("hello ,server is up and running and \n i am respoding to the request" );
})

//listen the server on port
server.listen( 3000, '127.0.0.1', ( )=> {
   
    console.log("server has started")
})