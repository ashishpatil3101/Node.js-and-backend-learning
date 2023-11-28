const express = require("express");
const router = express.Router();
const { 
    registerUser ,
    loginUser,
    getUserInfo
} 
    = require('../controller/userController')

router.post("/register",registerUser );
router.post("/login" , loginUser);
router.get('/',getUserInfo )

module.exports = router