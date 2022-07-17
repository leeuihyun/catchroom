import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen(state, action) {
            state.isOpen = action.payload.data;
        },
    },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
