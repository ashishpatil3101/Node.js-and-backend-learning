const express = require('express')

const startServer = ()=>{

    const app = express();
     
    //will convert into json
    //content type will be based on data
    app.get('/', (req, res)=>{

        res.send({home: "i am at home"})
    })

    //will convert into json 
    //content type will always be json
    //data will be treated as what has sent 
    app.get('/user', (req, res)=>{

        res.json([{name: "vaibhav"}])
    })

    app.get('/number', (req, res)=>{

        res.json(1)
    })

    app.get('/data' , (req,res)=>{
        res.send('<h1>hey i am sending html element </h1>')
    })

    
    app.listen(3000, ()=>{
        console.log("server is up and running")
    })
}
startServer();