//instruction
//add folder views and extension template file to be .hbs
// add view engine to hbs  and use res.render to render view
const express = require('express');


const createAndRunServer = ()=>{

    const app = express();

    //telling nodeapp that use hbs as view engine
    app.set('view engine', 'hbs')
    
    app.get('/', (req, res)=>{

        res.render('index',{
            header: 'vaibhav hereee',
            itemOne: "java",
            itemTwo: "javaScript"
        })

    })

    app.listen( 3000, ()=>{
        console.log("server has started on port 3000")
    })
}

createAndRunServer();