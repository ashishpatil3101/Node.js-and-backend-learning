const express= require('express')
const path= require('path')
const User= require('../model/user')
const rout= express.Router();
const bcrypt =  require('bcrypt')

const  {createToken}= require('../jsonwebTokenRefrence')


//rout
rout.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });
  
rout.get('/register', (req, res) => {
    
    const filePath = path.join(__dirname ,'../public/register.html')
    res.sendFile(filePath);
});
  
rout.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Create a new user
      const user = new User({
        email: email,
        password: password
      });
       
      await user.save();
  
      res.redirect('/login');
    } catch (error) {
      res.status(500).send(error);
      // res.status(500).send('Error registering user');
    }
  });
  
rout.get('/login', (req, res) => {
    
    const filePath = path.join(__dirname ,'../public/login.html')
    res.sendFile(filePath);
});
  
//login 
rout.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Find the user in the database
      const user = await User.findOne({ email });
      const isPasswordMatch = await bcrypt.compare( password, user.password );
     console.log(isPasswordMatch,password,user)
      // Check if the password matches
      if (user && isPasswordMatch ) {

        // const token = await createToken( user._id );
        await user.createToken();
        await user.save();
    
        //send token as cookie
        // res.cookie('jwt', user.tokens)
         

        //send response to user
        res.send({
          message: 'user logged in successfully',
          token: user.tokens
        });
      } 
      else {
        res.status(401).send('Invalid username or password');
      }
    } catch (error) {
      res.status(500).send('Error logging in');
    }
  });


module.exports = rout