import React, { useEffect } from "react";
import SingleRoomComponent from "../components/SingleRoomComponent";
import { useDispatch } from "react-redux";
import { logInCheck } from "../reducers/userSlice";

const SingleRoomPage = () => {
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);
    return (
        <>
            <SingleRoomComponent />
        </>
    );
};

export default SingleRoomPage;
