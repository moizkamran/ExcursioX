import mongoose from "mongoose";
const { Schema } = mongoose;

// Orignal BookingSouq Property Schema version 3.9.0 (2023-05-19)
// Written by Abdulmoiz Kamran

// This schema is used to store property information in the database.

const propertySchema = new Schema({
    companyId: {
        type: String,
        required: true,
    },
    propertyPhotos: [
        {
            photoUrl: {
                type: String,
                required: false,
            },
        },
    ],
    propertyIfHotelConfiguration: {
        ownsMultipleHotels: {
            type: Boolean,
            default: false,
            required: false,
        },
        starRating: {
            type: Number,
            required: false,
        },
        hotelChain: {
            type: String,
            required: false,
        },
        hotelChainWebsite: {
            type: String,
            required: false,
        },
    },
    propertyHouseRules: {
        cancellationPolicy: {
            type: String,
            required: true,
        },
        checktimes: {
            guestArrival: {
                from: {
                    type: String,
                    required: true,
                },
                to: {
                    type: String,
                    required: true,
                },
            },
            guestDeparture: {
                from: {
                    type: String,
                    required: true,
                },
                to: {
                    type: String,
                    required: true,
                },
            },
        },
        isSmokingAllowed: {
            type: Boolean,
            required: true,
        },
        isPetsAllowed: {
            type: Boolean,
            required: true,
        },
        isInfantsAllowed: {
            type: Boolean,
            required: true,
        },
        minNightStay: {
            type: Number,
            required: true,
        },
    },
    propertyConfiguration: {
        accidentalBookingsProtection: {
            type: Boolean,
            default: false,
            required: false,
        },
        onPropertyCreditCards: [
            {
                cardType: {
                    type: String,
                    required: true,
                },
            },
        ],
        bindPayments: {
            type: Boolean,
            default: false,
            required: false,
        },
        isAcceptedTerms: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    propertyAddedBy: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    isCompanyOwned: {
        type: Boolean,
        required: true,
    },
    usesChannelManager: {
        type: Boolean,
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
    propertyParking: {
        isParkingAvailable: {
            type: Boolean,
            required: true,
        },
        parkingType: {
            type: String,
            required: false,
        },
        parkingSpace: {
            type: String,
            required: false,
        },
        isReservationRequired: {
            type: Boolean,
            required: false,
        },
        parkingPrice: {
            type: String,
            required: false,
        },
    },
    staffLanguages: [
        {
            language: {
                type: String,
                required: true,
            },
        },
    ],
    propertyCountry: {
        type: String,
        required: false,
    },
    propertyZip: {
        type: String,
        required: false,
    },
    propertyFloors: [
        {
            floorRooms: [
                {
                    roomNumber: {
                        type: String,
                        required: true,
                    },
                    roomBasePrice: {
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
                    roomBreakfast: {
                        isIncluded: {
                            type: Boolean,
                            required: true,
                        },
                        type: {
                            type: String,
                            required: false,
                        },
                        price: {
                            type: String,
                            required: false,
                        },
                    },
                    roomFacilites: [
                        {
                            facilityName: {
                                type: String,
                                required: true,
                            },
                        },
                    ],
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