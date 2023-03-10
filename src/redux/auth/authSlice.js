import persistReducer from "redux-persist/es/persistReducer";
import { createSlice } from "@reduxjs/toolkit";
import  { authInitialState } from "./authInitState";
import { signUpThunk, logInThunk, logOutThunk, currentThunk } from "./authThunk";
import storage from "redux-persist/lib/storage";

function setStatusFulfilled(state) {
    state.isLoading = false
    state.error = null
}

function signUpFulfilled(state, action) {
    state.user = action.payload.user;
    state.token = action.payload.token
    setStatusFulfilled(state)
}

function logInFulfilled(state, action) {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLogin = true
    setStatusFulfilled(state)
}

function logOutFulfilled(state) {
    state.user = {};
    state.token = '';
    setStatusFulfilled(state)
}

function currentFulfilled(state, action) {
    state.user = action.payload;
    setStatusFulfilled(state)
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state) => {
            state.isLoading = true
        }).addCase(signUpThunk.fulfilled, signUpFulfilled
        ).addCase(signUpThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }).addCase(logInThunk.pending, (state) => {
            state.isLoading = true
        }).addCase(logInThunk.fulfilled, logInFulfilled
        ).addCase(logInThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }).addCase(logOutThunk.pending, (state) => {
            state.isLoading = true
        }).addCase(logOutThunk.fulfilled, logOutFulfilled
        ).addCase(logOutThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }).addCase(currentThunk.pending, (state) => {
            state.isLoading = true
        }).addCase(currentThunk.fulfilled, currentFulfilled
        ).addCase(currentThunk.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
    }
})

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer)