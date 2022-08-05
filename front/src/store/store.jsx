import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import roomSlice from "../reducers/roomSlice";

import axios from "axios";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;

const store = configureStore({
    reducer: {
        user: userSlice,
        room: roomSlice,
    },
});

export default store;
