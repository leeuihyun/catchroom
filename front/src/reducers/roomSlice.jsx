import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials = true;
const initialState = {
    loadRoomLoading: false,
    loadRoomDone: false,
    loadRoomError: null,
    searchCount: 0,
    room: null,
    now: null, //현재 검색한 위치
    rooms: [
        {
            Column1: 0,
            주소: "서울특별시 광진구 자양동",
            가격: "전세 9000",
            룸타입: "원룸",
            면적: "19.83㎡",
            층: "1층",
            방화장실: "1개 / 1개",
            관리비: "2만 원",
        },
        {
            Column1: 1,
            주소: "서울특별시 광진구 구의동 241-2, 1동",
            가격: "월세 1000/60",
            룸타입: "원룸",
            면적: "29.75㎡",
            층: "중층",
            방화장실: "1개 / 1개",
            관리비: "3만 원",
        },
        {
            Column1: 2,
            주소: "서울특별시 광진구 화양동 121-9",
            가격: "전세 5억",
            룸타입: "쓰리룸 이상",
            면적: "59.5㎡",
            층: "8층",
            방화장실: "3개 / 2개",
            관리비: "9만 원",
        },
        {
            Column1: 3,
            주소: "서울특별시 광진구 구의동 221-60",
            가격: "전세 2억7000",
            룸타입: "투룸",
            면적: "42.97㎡",
            층: "3층",
            방화장실: "2개 / 1개",
            관리비: "5만 원",
        },
    ],
};

export const getRoom = createAsyncThunk("getRoom", async (data) => {
    try {
        const res = await axios.get(`/rooms?search=${data}`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
        return error.response.data;
    }
});
const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        rememberLocation(state, action) {
            state.now = action.payload;
        },
    },
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
            state.room = action.payload.Rooms;
            state.searchCount = action.payload.searchCount;
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
