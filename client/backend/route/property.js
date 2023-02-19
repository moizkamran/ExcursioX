const express = require('express')
const Property = require('../models/propertiesModel')
const router = express.Router()


//Get all properties
router.get('/', (req, res) =>{
    res.json({msg: 'Get all properties'})
})

//Get single property
router.get('/:id', (req, res) =>{
    res.json({msg: "Get a single property"})
})

//POST a new property
router.post('/', async (req, res) =>{
    const {title, location, floors, rooms} = req.body

    try {
        const property = await Property.create({title, location, floors, rooms})
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a new property
router.delete('/:id', (req, res) =>{
    res.json({msg: 'Delete property'})
})

//Update a new property
router.patch('/:id', (req, res) =>{
    res.json({msg: 'Update property'})
})

module.exports = router