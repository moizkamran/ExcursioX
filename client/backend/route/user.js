const express = require('express')

//controller function
const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router()

//sign up route
router.post('/register', registerUser)

//login router
router.post('/login', loginUser)





module.exports = router