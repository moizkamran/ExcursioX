import propertyReducer from "../Slicers/propertySlice";
import userReducer from "../Slicers/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    property: propertyReducer,
    user : userReducer,
  },
});

export default store;
