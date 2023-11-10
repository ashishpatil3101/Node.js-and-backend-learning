const express= require('express');

const createAndRunServer = ()=>{

    const app = express();

    app.get('/', (req, res)=>{
        res.status(200).send('you are on home page')
    })

    app.get("/about", (req, res )=>{
        res.status(200).send("you are on about page")
    })

    app.get('/user/photo', (req,res)=>{
        res.status(302).send("fetched the photo succesfully")
    })

    app.listen(3000, ()=>{
        console.log("server has started on port 3000")
    })
}

createAndRunServer();

