//Backend configurations
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const propertyRoutes = require('./route/property')


//Express App
const app = express()

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/property',propertyRoutes)

//Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db and Listening on', process.env.PORT, 'oyh!')
})
    })
    .catch((error) => {
        console.log(error)
    })


