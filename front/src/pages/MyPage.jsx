import React from "react";
import MyPageComponent from "../components/MyPageComponent";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logInCheck } from "../reducers/userSlice";

const MyPage = () => {
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);
    return (
        <>
            <MyPageComponent></MyPageComponent>
        </>
    );
};

export default MyPage;
