const User = require('../models/userModel')


//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'Loign user'})
}


//register user
const registerUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.register(email, password)
        res.status(200).json({email, user})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    registerUser, loginUser,
}