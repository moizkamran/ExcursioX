const mongoose = require('mongoose')

const Schema = mongoose.Schema

const propertySchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    floors: {
        type: Number, 
        required: true
    },
    rooms: {
        type: Number, 
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model('Property', propertySchema)