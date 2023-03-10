import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrent, getLogIn, getLogOut, getSignUp } from "Service/authAPI";


export const signUpThunk = createAsyncThunk(
    'auth/signUp',
    async (user, { rejectWithValue }) => {
    try {
        return await getSignUp(user);
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const logInThunk = createAsyncThunk(
    'auth/logIn',
    async (user, { rejectWithValue }) => {
    try {
        return await getLogIn(user);
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const logOutThunk = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
    try {
        return await getLogOut();
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const currentThunk = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState();
        const result = await getCurrent(auth.token);
        return result;
    } catch ({ response }) {
        const { status, statusText } = response;
        const error = { status, statusText };
        return rejectWithValue(error);
    }
}
);
