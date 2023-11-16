const express = require('express');
const hbs = require('hbs');
const path = require('path')


const createAndRunServer = ()=>{

    const app = express();
    //
    

    //construct path
    const templatePath= path.join(__dirname, '/templates/views');
    const partialPath = path.join(__dirname, '/templates/partials')

    //view engine settings
    app.set('view engine', 'hbs');
    app.set('views', templatePath)
    //partial settings
    hbs.registerPartials( partialPath );


    //routes


    app.get('/', ( req, res)=>{
        res.render('index')
    })

    app.get('/*', (req,res)=>{

        res.render('notFoundErrorPage', {
            errorComment: "page not found"
        })
    })

    
    app.listen(3000, ()=>{
        console.log('server has started ')
    })
}
createAndRunServer();