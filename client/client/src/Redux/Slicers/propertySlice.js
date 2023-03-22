<<<<<<< Updated upstream
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
=======
<<<<<<< Updated upstream
import { createSlice } from '@reduxjs/toolkit';
=======
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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
