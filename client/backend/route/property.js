const express = require('express')
const {
    addProperty,
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty,
} = require('../controllers/propertyController')
const requireAuth = require('../middleware/requireAuth')



const router = express.Router()

//require AUTH for properties
router.use(requireAuth)

//Get all properties
router.get('/', getProperties)

//Get single property
router.get('/:id', getProperty)

//POST a new property
router.post('/', addProperty)

//DELETE a new property
router.delete('/:id', deleteProperty)

//Update a new property
router.patch('/:id', updateProperty)

module.exports = router