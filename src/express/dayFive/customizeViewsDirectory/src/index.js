const express =  require('express');
const path = require('path');

const createAndRunServer = ()=>{

    const app = express();
    //build path
    const templatePath = path.join(__dirname,'/public')
     
    //setting view engine as hbs
    app.set('view engine', 'hbs');

    
    
    //tell express that we will be looking for template engine in 
    //specific (user definedfolder) instead of views folder
    app.set('views', templatePath);

    //route
    app.get('/', (req, res )=>{
        
        res.render('index',{
            header: 'vaibhav hereee',
            itemOne: "java",
            itemTwo: "javaScript"
        })
    }
    ) 


    app.listen(3000, ()=>{
        console.log("server is up and running")
    })
}
createAndRunServer()