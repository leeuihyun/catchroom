import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";
import Wish from "./pages/Wish";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.min.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="map" element={<Map />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="wish" element={<Wish />}></Route>
        </Routes>
    );
};

export default App;
