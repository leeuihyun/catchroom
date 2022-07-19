import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortId from "shortid";
//import { backUrl } from "../config/config";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;
//axios.defaults.baseURL = backUrl;

const initialState = {
    studentUser: null,
    hostUser: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
};

const dummyStudentLogIn = (data) => ({
    id: shortId.generate(),
    email: data.email,
    password: data.password,
});

const dummyHostLogIn = (data) => ({
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

export const studentLogIn = createAsyncThunk("studentLogIn", async (data) => {
    try {
        //const res = await axios.post("logIn/post", data);
        //console.log(res);

        console.log("logIn");
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
});
export const hostLogIn = createAsyncThunk("hostLogIn", async (data) => {
    try {
        //const res = await axios.post("logIn/post", data);
        //console.log(res);
        console.log("hostLogIn");
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
});
export const hostSignUp = createAsyncThunk("hostSignUp", async (data) => {
    try {
        //const res = await axios.post("", data);
        //console.log(res);
        console.log("hostSignUp");
        console.log(data);
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const studentSignUp = createAsyncThunk(
    "studentSignUp",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/members/new", data, {
                withCredentials: true,
            });
            console.log(res);
            return res.data;
            //console.log("studentSignUp");
            //console.log(data);
        } catch (error) {
            return rejectWithValue("Opps there seems to be an error");
        }
    }
);

export const logInCheck = createAsyncThunk("logInCheck", async (data) => {
    try {
        //const res = await axios.get("studentLogInCheck/");
        //console.log(res);
        //return res;
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const hostLogOut = createAsyncThunk("hostLogOut", async (data) => {
    try {
        //const res = await axios.post("https://catchroom.com/hostLogOut", data);
        //return res;
        console.log(data);
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const studentLogOut = createAsyncThunk("studentLogOut", async (data) => {
    try {
        //const res = await axios.post("studentLogOut", data);
        //return res;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
});
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signUpClear(state, action) {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = null;
        },
    },
    extraReducers: {
        [studentLogIn.pending]: (state, action) => {
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
        },
        [studentLogIn.fulfilled]: (state, action) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.studentUser = dummyStudentLogIn(action.payload.data);
            state.logInError = null;
        },
        [studentLogIn.rejected]: (state, action) => {
            state.logInLoading = false;
            state.logInDone = false;
            state.logInError = action.error;
        },
        [hostLogIn.pending]: (state, action) => {
            state.logInLoading = true;
            state.logInDone = false;
            state.logInError = null;
        },
        [hostLogIn.fulfilled]: (state, action) => {
            state.logInLoading = false;
            state.logInDone = true;
            state.hostUser = dummyHostLogIn(action.payload.data);
            state.logInError = null;
        },
        [hostLogIn.rejected]: (state, action) => {
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
        [hostSignUp.pending]: (state, action) => {
            state.signUpLoading = true;
            state.signUpDone = false;
            state.signUpError = null;
        },
        [hostSignUp.fulfilled]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = true;
            state.signUpError = null;
            state.studentUser = null;
        },
        [hostSignUp.rejected]: (state, action) => {
            state.signUpLoading = false;
            state.signUpDone = false;
            state.signUpError = action.error;
        },
        [studentLogOut.pending]: (state, action) => {
            state.logOutLoading = true;
            state.logOutDone = false;
            state.logOutError = null;
        },
        [studentLogOut.fulfilled]: (state, action) => {
            state.logOutLoading = false;
            state.logOutDone = true;
            state.logOutError = null;
            state.studentUser = null;
        },
        [studentLogOut.rejected]: (state, action) => {
            state.logOutLoading = false;
            state.logOutDone = false;
            state.logOutError = action.error;
        },
        [hostLogOut.pending]: (state, action) => {
            state.logOutLoading = true;
            state.logOutDone = false;
            state.logOutError = null;
        },
        [hostLogOut.fulfilled]: (state, action) => {
            state.logOutLoading = false;
            state.logOutDone = true;
            state.logOutError = null;
            state.hostUser = null;
        },
        [hostLogOut.rejected]: (state, action) => {
            state.logOutLoading = false;
            state.logOutDone = false;
            state.logOutError = action.error;
        },
    },
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
