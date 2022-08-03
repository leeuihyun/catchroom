import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;
const initialState = {
    loadRoomLoading: false,
    loadRoomDone: false,
    loadRoomError: null,
};

const bangSlice = createSlice({
    name: "bang",
    initialState,
    reducers: {},
    extraReducers: {},
});

export const bangSliceActions = bangSlice.actions;
export default bangSlice.reducer;
