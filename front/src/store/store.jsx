import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import modalSlice from "../reducers/modalSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        modal: modalSlice,
    },
});

export default store;
