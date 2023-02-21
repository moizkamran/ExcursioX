const { response } = require('express')
const mongoose = require('mongoose')
const Property = require('../models/propertiesModel')

//GET ALL PROPERTY
const getProperties = async (req, res) =>{
    const propertiesAll = await Property.find({}).sort({createdAt: -1})

    res.status(200).json(propertiesAll)
}

//GET A SINGLE PROPERTY

const getProperty = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id!'})
    }
    const property = await Property.findById(id)

    if (!property){
        return res.status(404).json({error: 'No such property exsists!'})
    }

    res.status(200).json(property)
}

//CREATE NEW PROPERTY
const addProperty = async (req, res) => {
    const {title, location, floors, rooms} = req.body

    try {
        const property = await Property.create({title, location, floors, rooms})
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//DELETE a Property

const deleteProperty = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id!'})
    }

    const property = await Property.findOneAndDelete({_id: id})

    if (!property){
        return res.status(404).json({error: 'No such property exsists!'})
    }

    res.status(200).json('Property has been deleted...')
}

//Update a property

const updateProperty = async (req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Id!'})
    }
    const property = await Property.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!property){
        return res.status(404).json({error: 'No such property exsists!'})
    }

    res.status(200).json(property)
}



module.exports ={
    addProperty,
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty,
}