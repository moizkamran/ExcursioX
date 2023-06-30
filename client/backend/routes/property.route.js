import express from 'express';
import {
  createProperty,
  getProperties,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
  getPropertiesByUserId,
  getPropertiesByCity,
  getPropertiesByCountry,
  getPropertiesByPropertyName,
  getPropertiesByRoomName,
  getPropertiesByRoomClass,
} from '../controllers/property.controller.js';

const router = express.Router();

router.post('/build', createProperty);

// GET ROUTES
router.get('/all', getProperties);
router.get('/:id', getPropertyById);
router.get('/user/:id', getPropertiesByUserId);
router.get('/city/:city', getPropertiesByCity);
router.get('/country/:country', getPropertiesByCountry);
router.get('/name/:name', getPropertiesByPropertyName)
router.get('/room/:name', getPropertiesByRoomName)
router.get('/room-class/:roomClass', getPropertiesByRoomClass)



router.put('/:id', updatePropertyById);
router.delete('/:id', deletePropertyById);

export default router;