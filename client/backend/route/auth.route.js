const express = require('express')
const router = express.Router()
//login router
router.post('/login', loginUser)


//sign up route
router.post('/register', registerUser)
