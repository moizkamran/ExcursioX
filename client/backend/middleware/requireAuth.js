const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth =async (req, res, next) => {
    //verify
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization Token Required'})
    }

    const token = authorization.split(' ')[1]

    //tamper check
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized!'})
    }
    

}

module.exports = requireAuth