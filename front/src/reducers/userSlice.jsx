import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { backUrl } from "../config/config";
//axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
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
    logInCheckLoading: false,
    logInCheckDone: false,
    logInCheckError: null,
};

export const studentLogIn = createAsyncThunk(
    "studentLogIn",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/members/login", data, {
                withCredentials: true,
            });
            console.log(res);
            localStorage.setItem("cookie", res.data.accessToken);
            const COOKIE = localStorage.getItem("cookie");
            console.log(COOKIE);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const hostLogIn = createAsyncThunk(
    "hostLogIn",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("host/logIn", data);
            console.log(res);
            localStorage.setItem("cookie", res.data.token);
            const COOKIE = localStorage.getItem("cookie");
            console.log(COOKIE);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const hostSignUp = createAsyncThunk(
    "hostSignUp",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/host/new", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const studentSignUp = createAsyncThunk(
    "studentSignUp",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/members/signup", data, {
                withCredentials: true,
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue("Opps there seems to be an error");
        }
    }
);

export const logInCheck = createAsyncThunk("logInCheck", async () => {
    try {
        //axios.defaults.headers.Cookie = "";
        axios.defaults.headers.common["Authorization"] = "";
        const COOKIE = localStorage.getItem("cookie");
        //axios.defaults.headers.Cookie = COOKIE;
        axios.defaults.headers.common["Authorization"] = `Bearer ${COOKIE}`;
        console.log(COOKIE);
        const res = await axios.get("/members/me", {
            withCredentials: true,
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return error.response.data;
    }
});

export const hostLogOut = createAsyncThunk("hostLogOut", async (data) => {
    try {
        localStorage.removeItem("cookie");
        const res = await axios.post("/hostLogOut", data);
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        return error;
    }
});

export const studentLogOut = createAsyncThunk("studentLogOut", async (data) => {
    try {
        localStorage.removeItem("cookie");
        const res = await axios.post("studentLogOut", data);
        console.log(res);

        return res.data;
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
            state.studentUser = action.payload;
            state.hostUser = null;
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
            state.hostUser = action.payload;
            state.studentUser = null;
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
        [logInCheck.pending]: (state, action) => {
            state.logInCheckLoading = true;
            state.logInCheckDone = false;
            state.logInCheckError = null;
        },
        [logInCheck.fulfilled]: (state, action) => {
            state.logInCheckLoading = false;
            state.logInCheckDone = true;
            state.logInCheckError = null;
            state.studentUser = action.payload;
        },
        [logInCheck.rejected]: (state, action) => {
            state.logInCheckLoading = false;
            state.logInCheckDone = false;
            state.logInCheckError = action.error;
        },
    },
});
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
