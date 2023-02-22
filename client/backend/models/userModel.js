const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = new Schema({
    companyId: {
        type: String,
        required: true, 
    },
    firstName: {
        type: String,
        required: true, 
    },
    lastName: {
        type: String,
        required: false, 
    },
    phone: {
        type: Number,
        required: false,
        unique: true,
    },
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
    if(!email || !password || !companyId){
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

//Static Login Method
userSchema.statics.login = async function(email, password){
    //validation
    if(!email || !password){
        throw Error('Please make sure that all fields are complete!')
    }
    
    const user = await this.findOne({email})

    if (!user){
        throw Error('Are you sure that you exists?')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error('Incorrect Password!')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)