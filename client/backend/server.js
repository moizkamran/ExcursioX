//Backend configurations
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const propertyRoutes = require('./route/property')
const userRoutes = require('./route/user')
const imageDownloader = require('image-downloader')


//Express App
const app = express()

//Middleware
app.use(express.json())

app.use('uploads', express.static(__dirname+'/uploads'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/property', propertyRoutes)
app.use('/api/user', userRoutes)


app.post('/actions/upload-by-link', async (req, res) => {
    const { link } = req.body
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname+'/uploads' +newName,
    });
    res.json(newName);
})

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


app.get('/api/test', (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok');
    });
