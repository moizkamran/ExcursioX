import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  propertyDetails: {
    type: '',
    floors: [],
    propertyTypeOf: '',
    propertyName: "",
    propertyContact: "",
    contactNumber: "",
    isCompanyOwned: "",
    hasChannelManeger: "",
    streetAddress: "",
    addressLine2: "",
    country: "",
    city: "",
  },

  propertyLayout: {
    apartment: "",
    nameOptional: "",
    bedrooms: 1,
    beds: [],
    suite: "",
    basePrice: "",
  },

  hotelLayout: {
  },

  propertyFacilites: {
    // PARKING
    isParkingAvailable: "No",
    parkingType: "",
    parkingSpace: "",
    isReservationRequired: "",
    parkingPrice: "",
    // BREAKFAST
    isBreakfastAvailable: "",
    breakfastType: [],
    breakfastPrice: "",
    // Languages
    languages: [],
    //Facilities
    facilities: [],
  },
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    updatePropertyDetails: (state, action) => {
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          ...action.payload,
        },
      };
    },
    updatePropertyLayout: (state, action) => {
      return {
        ...state,
        propertyLayout: {
          ...state.propertyLayout,
          ...action.payload,
        },
      };
    },
    updatePropertyFacilites: (state, action) => {
      return {
        ...state,
        propertyFacilites: {
          ...state.propertyFacilites,
          ...action.payload,
        },
      };
    },
    addHotelLayout: (state, action) => {
      return {
        ...state,
        hotelLayout: {
          ...state.hotelLayout,
          ...action.payload,
        },
      };
    },
    addRoomToFloor: (state, action) => {
      const { floorId, room } = action.payload;
      const newFloors = [...state.propertyDetails.floors];
      const floorIndex = newFloors.findIndex(floor => floor.name === `Floor ${floorId + 1}`);
      const newRooms = [...newFloors[floorIndex].rooms, room];
      newFloors[floorIndex] = { ...newFloors[floorIndex], rooms: newRooms };
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          floors: newFloors,
        },
      };
    },
  },
});

export const {
  updatePropertyDetails,
  updatePropertyLayout,
  updatePropertyFacilites,
  addHotelLayout,
  addRoomToFloor,
} = propertySlice.actions;
export default propertySlice.reducer;
