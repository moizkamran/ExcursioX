import mongoose from "mongoose";
const { Schema } = mongoose;

const propertySchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    propertyAddedBy: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    propertyTypeOf : {
        type: String,
        required: false,
    },
    propertyName: {
        type: String,
        required: true,
    },
    propertyAddress: {
        type: String,
        required: true,
    },
    propertyCity: {
        type: String,
        required: true,
    },
    propertyState: {
        type: String,
        required: false,
    },
    propertyZip: {
        type: String,
        required: false,
    },
    propertyFloors: [
        {
            floorIndex: {
                type: String,
                required: true,
            },
            floorRooms: [
                {
                    roomNumber: {
                        type: String,
                        required: true,
                    },
                    roomName: {
                        type: String,
                        required: true,
                    },
                    roomId: {
                        type: String,
                        required: true,
                    },
                    roomType: {
                        type: String,
                        required: true,
                    },
                    roomSize: {
                        type: String,
                        required: true,
                    },
                    roomClass: {
                        type: String,
                        required: true,
                    },
                    roomView: {
                        type: String,
                        required: false,
                    },
                    roomMaxGuests: {
                        type: Number,
                        required: true,
                    },
                    roomBedsClassifications: [
                        {
                            single: {
                                type: Number,
                                required: false,
                            },
                            double: {
                                type: Number,
                                required: false,
                            },
                            sofa: {
                                type: Number,
                                required: false,
                            },
                            bunk: {
                                type: Number,
                                required: false,
                            },
                        },
                    ],
                    roomBeds: [
                        {
                            bedType: {
                                type: String,
                                required: true,
                            },
                            bedIcon: {
                                type: String,
                                required: false,
                            },
                            bedOccupancy: {
                                type: Number,
                                required: true,
                            },
                            bedId: {
                                type: String,
                                required: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
},{
    timestamps:true
  });

export default mongoose.model("Property", propertySchema)