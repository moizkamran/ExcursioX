import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        email: null,
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export const { update } = authSlice.actions;
