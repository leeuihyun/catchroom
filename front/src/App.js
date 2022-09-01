import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import SearchMap from "./pages/SearchMap";
import SingleRoomPage from "./pages/SingleRoomPage";
import Community from "./pages/Community";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.min.css";
import axios from "axios";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="map" element={<Map />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="mypage" element={<MyPage />}></Route>
            <Route path="searchmap/:value" element={<SearchMap />}></Route>
            <Route path="single" element={<SingleRoomPage />}></Route>
            <Route path="community" element={<Community />}></Route>
        </Routes>
    );
};

export default App;
