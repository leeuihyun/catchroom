import React, { useEffect } from "react";
import HomeLayout from "../components/HomeLayout";
import { logInCheck } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logInCheck());
    }, []);
    return <HomeLayout></HomeLayout>;
};

export default Home;
