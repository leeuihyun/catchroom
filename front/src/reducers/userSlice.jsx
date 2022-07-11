import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortId from "shortid";

const initialState = {
    studentUser: null,
    hostUser: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
};

const dummyStudentLogin = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
});

const dummyHostLogin = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
});

const dummyStudentSignUp = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
    address: data.address,
    name: data.name,
    phone: data.phone,
});

const dummyHostSignUp = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
    address: data.address,
    name: data.name,
    phone: data.phone,
});

export const logIn = createAsyncThunk("logIn", async () => {
    try {
        //const res = await axios.post("https://catchroom.com/logIn/post", data);
        //console.log(res);

        console.log("logIn");
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const hostSignUp = createAsyncThunk("hostSignUp", async (data) => {
    try {
        //const res = await axios.post("https://catchroom.com/", data);
        //console.log(res);
        console.log("hostSignUp");
        console.log(data);
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const studentSignUp = createAsyncThunk("studentSignUp", async (data) => {
    try {
        //const res = await axios.post("https://catchroom.com/studentSignUp/post", data);
        //console.log(res);
        //return res;
        console.log("studentSignUp");
        console.log(data);
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const logInCheck = createAsyncThunk("logInCheck", async (data) => {
    try {
        //const res = await axios.get("https://catchroom.com/studentLogInCheck/");
        //console.log(res);
        //return res;
    } catch (error) {
        console.error(error);
        return error;
    }
});
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [logIn.pending]: (state, action) => {
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
        },
        [logIn.fulfilled]: (state, action) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.logInError = null;
        },
        [logIn.rejected]: (state, action) => {
            state.logInLoading = false;
            state.logInDone = false;
            state.logInError = action.error;
        },
        [studentSignUp.pending]: (state, action) => {
            state.signUpLoading = true;
            state.signUpDone = false;
            state.signUpError = null;
        },
        [studentSignUp.fulfilled]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = true;
            state.signUpError = null;
            state.studentUser = dummyStudentLogin(action.data);
            state.hostUser = null;
        },
        [studentSignUp.rejected]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = action.error;
        },
        [hostSignUp.pending]: (state, action) => {
            state.signUpLoading = true;
            state.signUpDone = false;
            state.signUpError = null;
        },
        [hostSignUp.fulfilled]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = true;
            state.signUpError = null;
            state.hostUser = dummyHostLogin(action.data);
            state.studentUser = null;
        },
        [hostSignUp.rejected]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = action.error;
        },
    },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
