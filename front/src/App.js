import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="map" element={<Map />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
        </Routes>
    );
};

export default App;
