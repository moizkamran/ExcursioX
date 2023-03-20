import propertyReducer from "../Slicers/propertySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export default store;
