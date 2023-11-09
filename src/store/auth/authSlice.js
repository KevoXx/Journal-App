import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status:'unauthenticated', // 'checking' | 'authenticated' | 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
        },
        logout: (state, payload) => {
        },
        checkCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login,logout,checkCredentials } = authSlice.actions;