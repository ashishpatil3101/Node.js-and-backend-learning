const express = require('express');
const path = require('path')
const hbs = require('hbs')


const creatAndRunServer = ()=>{

    const app = express();
    
    //construct path
    const templatePath = path.join(__dirname,'/templates/views');
    const partialPath = path.join(__dirname,'/templates/partials')

    //view engine settings
    app.set('view engine', 'hbs')
    app.set('views', templatePath)
    hbs.registerPartials(partialPath)
    

    

    app.get('/' , (req, res )=>{

        res.render('index');
    })

    app.get('/about' , (req, res )=>{

        res.render('about');
    })

    app.listen( 3000, ()=>{

        console.log("server has started ")
    })
}

creatAndRunServer();