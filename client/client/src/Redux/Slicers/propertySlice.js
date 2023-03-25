import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  propertyDetails: {
    type: "",
    propertyName: " ",
    propertyContact: "",
    contactName: " ",
    company: " ",
    channel: " ",
    streetAddress: " ",
    addressLine2: " ",
    country: " ",
  },
  propertyLayout: {
    apartment: "",
    nameOptional: "",
    bedroom: "",
    bedroomCount: "",
    suite: "",
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
  },
});

export const { updatePropertyDetails, updatePropertyLayout } = propertySlice.actions;
export default propertySlice.reducer;
