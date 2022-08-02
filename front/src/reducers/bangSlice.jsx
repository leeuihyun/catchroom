import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const initialState = {
    wishLoading: false,
    wishDone: false,
    widthError: null,
};

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {},
    extraReducers: {
        []: (state, action) => {
            
        }
    }
})