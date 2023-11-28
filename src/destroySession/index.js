const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use( cookieParser())

// Use the express-session middleware
//options 
//resave true //the session data will be saved on request if it hasnt been modified
//savun true // session that is new but not modified will be saved
app.use(session({
  secret: 'your-secret-key',
  resave: false,    
  saveUninitialized: true,
}));

// Your routes and other middleware go here...

// Example route for destroying the session
app.get('/logout', (req, res) => {
  // Destroy the session
 
  req.session.regenerate((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
        
      res.end('session destroyed')
    //   res.redirect('/');
    }
  });
});


app.get('/', (req, res)=>{
    res.cookie('jwt',"heyyyy",{ secure: true, httpOnly: true })
    res.send('hello  wolrd')
})

app.get('/cookie' , (req,res)=>{
    res.send('cookie '+ req.cookies.jwt)
})
// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});