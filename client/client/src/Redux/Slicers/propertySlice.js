import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  propertyDetails: {
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
    propertyForm: (state, { payload }) => {
      state.propertyDetails = payload;
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

export const { propertyForm, updatePropertyLayout } = propertySlice.actions;
export default propertySlice.reducer;
