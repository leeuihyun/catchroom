import React, { useEffect } from "react";
import HomeLayout from "../components/HomeLayout";
import { logInCheck } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);
    return <HomeLayout></HomeLayout>;
};

export default Home;
