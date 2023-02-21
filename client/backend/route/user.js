const express = require('express')

//controller function
const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router()


//login router
router.post('/login', loginUser)


//sign up route
router.post('/register', registerUser)



module.exports = router