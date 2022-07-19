import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import modalSlice from "../reducers/modalSlice";
import axios from "axios";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;
const store = configureStore({
    reducer: {
        user: userSlice,
        modal: modalSlice,
    },
});

export default store;
