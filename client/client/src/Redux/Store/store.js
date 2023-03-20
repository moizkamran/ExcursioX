import {configureStore} from '@reduxjs/toolkit';
import { reducer } from '../Slicers/propertySlice';


const store = configureStore({
    reducer,
});

export default store; 