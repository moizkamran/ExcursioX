import propertyReducer from "../Slicers/propertySlice";
import userReducer from "../Slicers/userSlice";
import passengerReducer from "../Slicers/passengerSlice";
import enterpriseReducer from "../Slicers/enterpriseSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import createTransform from "redux-persist/es/createTransform";
import storage from 'redux-persist/lib/storage'

const excludeLoadingAndError = createTransform(
  // Transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    return key === 'user' ? { ...inboundState, loading: false, error: false } : inboundState;
  },
  // Transform state being rehydrated
  (outboundState, key) => {
    return key === 'user' ? { ...outboundState, loading: false, error: false } : outboundState;
  },
  { whitelist: ['user'] }
);

const rootReducer = combineReducers({
  property: propertyReducer,
  passengers: passengerReducer,
  user : userReducer,
  enterprise: enterpriseReducer,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [excludeLoadingAndError],
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store;
