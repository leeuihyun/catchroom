import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;
const initialState = {
    loadRoomLoading: false,
    loadRoomDone: false,
    loadRoomError: null,
    rooms: null,
};
const getRoom = createAsyncThunk(
    "getRoom",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/room", data);
            console.log(res);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
const roomSlice = createSlice({
    name: "bang",
    initialState,
    reducers: {},
    extraReducers: {
        [getRoom.pending]: (state, action) => {
            state.loadRoomLoading = true;
            state.loadRoomDone = false;
            state.loadRoomError = null;
        },
        [getRoom.fulfilled]: (state, action) => {
            state.loadRoomLoading = false;
            state.loadRoomDone = true;
            state.loadRoomError = null;
            state.rooms = action.payload;
        },
        [getRoom.rejected]: (state, action) => {
            state.loadRoomLoading = false;
            state.loadRoomDone = false;
            state.loadRoomError = action.error;
        },
    },
});

export const roomSliceActions = roomSlice.actions;
export default roomSlice.reducer;
