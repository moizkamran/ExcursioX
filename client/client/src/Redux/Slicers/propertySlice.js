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
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    propertyForm: (state, { payload }) => {
      state.propertyDetails = payload;
    },
  },
});

export const { propertyForm } = propertySlice.actions;
export default propertySlice.reducer;
