import React from "react";
import MyPageComponent from "../components/MyPageComponent";
import Header from "../components/Header";

const MyPage = () => {
    return (
        <>
            <Header color="black"></Header>
            <MyPageComponent></MyPageComponent>
        </>
    );
};

export default MyPage;
