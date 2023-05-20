import express from 'express';
import {
  createProperty,
  getProperties,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
} from '../controllers/property.controller.js';

const router = express.Router();

router.post('/build', createProperty);
router.get('/all', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updatePropertyById);
router.delete('/:id', deletePropertyById);

export default router;