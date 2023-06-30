import Property from '../models/property.model.js';

export const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertiesByUserId = async (req, res) => {
  try {
    const properties = await Property.find({ userId: req.params.id });
    if (!properties) {
      return res.status(404).json({ message: 'Properties not found' });
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertiesByCity = async (req, res) => {
  try {
    const properties = await Property.find({ propertyCity: req.params.city });
    if (!properties) {
      return res.status(404).json({ message: 'Properties not found' });
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertiesByCountry = async (req, res) => {
  try {
    const properties = await Property.find({ propertyCountry: req.params.country });
    if (!properties) {
      return res.status(404).json({ message: 'Properties not found' });
    }
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add a search by property name

export const getPropertiesByPropertyName = async (req, res) => {
  try {
    const regex = new RegExp(req.params.name, 'i'); // Create a case-insensitive regex from the search query
    const properties = await Property.find({ propertyName: regex });
    
    if (properties.length === 0) { // Check if no properties were found
      return res.status(404).json({ message: 'Properties not found' });
    }
    
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add get by room name
export const getPropertiesByRoomName = async (req, res) => {
  try {
    const regex = new RegExp(req.params.name, 'i'); // Create a case-insensitive regex from the search query
    const properties = await Property.find({ 'propertyFloors.floorRooms.roomName': regex });

    if (properties.length === 0) {
      return res.status(404).json({ message: 'Properties not found' });
    }

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add by roomClass

export const getPropertiesByRoomClass = async (req, res) => {
  try {
    const regex = new RegExp('^' + req.params.roomClass + '$'); // Create a case-sensitive regex for exact match
    const properties = await Property.find({ 'propertyFloors.floorRooms.roomClass': regex });

    if (properties.length === 0) {
      return res.status(404).json({ message: 'Properties not found' });
    }

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






export const deletePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property demolished successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};