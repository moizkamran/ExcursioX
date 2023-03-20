const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
  }


//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create a token 
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


//register user
const registerUser = async (req, res) => {
    const {email, password, companyId, firstName, lastName, phone} = req.body

    try {
        const user = await User.register(email, password, companyId, firstName, lastName, phone)

        //create a token 
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    registerUser, loginUser,
}