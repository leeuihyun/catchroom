import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortId from "shortid";

const initialState = {
    studentUser: null,
    presidentUser: null,
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

const dummyPresidentLogin = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
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

export const presidentSignUp = createAsyncThunk(
    "presidentSignUp",
    async (data) => {
        try {
            //const res = await axios.post("https://catchroom.com/", data);
            //console.log(res);
            console.log("presidentSignUp");
            console.log(data);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
);

export const studentSignUp = createAsyncThunk("studentSignUp", async (data) => {
    try {
        //const res = await axios.post("https://catchroom.com/studentSignUp/post", data);
        //console.log(res);
        console.log("studentSignUp");
        console.log(data);
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
        },
        [studentSignUp.rejected]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = action.error;
        },
        [presidentSignUp.pending]: (state, action) => {
            state.signUpLoading = true;
            state.signUpDone = false;
            state.signUpError = null;
        },
        [presidentSignUp.fulfilled]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = true;
            state.signUpError = null;
        },
        [presidentSignUp.rejected]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = action.error;
        },
    },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
