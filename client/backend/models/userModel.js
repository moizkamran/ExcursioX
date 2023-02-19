const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//Static Register Method
userSchema.statics.register = async function (email, password){

    //validation
    if(!email || !password){
        throw Error('Please make sure that all fields are complete!')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid!')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password must meet minimum security checks!')
    }

    const exists = await this.findOne({email})

    if (exists){
        throw Error('User already exsists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user

}

module.exports = mongoose.model('User', userSchema)