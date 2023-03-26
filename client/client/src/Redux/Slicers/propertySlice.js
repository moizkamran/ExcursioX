import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  propertyDetails: {
    type: '',
    propertyTypeOf: '',
    propertyName: "",
    propertyContact: "",
    contactNumber: "",
    isCompanyOwned: "",
    hasChannelManeger: "",
    streetAddress: "",
    addressLine2: "",
    country: "",
    city: ''
  },
  propertyLayout: {
    apartment: "",
    nameOptional: "",
    bedrooms: 1,
    beds: [],
    suite: "",
    basePrice: '',
  },

  propertyFacilites: {
    // PARKING
    isParkingAvailable: "No",
    parkingType: "",
    parkingSpace: "",
    isReservationRequired: "",
    parkingPrice : '',
    // BREAKFAST
    isBreakfastAvailable: "",
    breakfastType: [],
    breakfastPrice: '',
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
  },
});

export const { updatePropertyDetails, updatePropertyLayout, updatePropertyFacilites } = propertySlice.actions;
export default propertySlice.reducer;
