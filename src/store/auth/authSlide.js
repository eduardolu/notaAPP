import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking', //cheking, no-autheticated , authenticated
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
    },
    reducers: {
        login: (state, {payload} ) => {
            state.status= 'autheticated'; //cheking, no-autheticated , authenticated
            state.uid=payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload} ) => {
            state.status= 'no-autheticated'; //cheking, no-autheticated , authenticated
            state.uid=null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage = payload?.errorMessage;
        },
        chekingCredentials:(state ) => {
            state.status = 'cheking';
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;