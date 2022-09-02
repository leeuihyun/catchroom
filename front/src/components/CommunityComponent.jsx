import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import { Avatar, List } from "antd";

function CommunityComponent() {
    return (
        <>
            <Header color="black" />
            <CommunityBox>
                <CommunityForm>
                    <CommunityTitle>커뮤니티</CommunityTitle>
                </CommunityForm>
                <Footer></Footer>
            </CommunityBox>
        </>
    );
}
const CommunityBox = styled.div`
    width: 100%;
    height: 120vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    padding-bottom: 200px;
`;

const CommunityForm = styled.div`
    width: 80%;
    height: 90%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
`;

const CommunityTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
`;
export default CommunityComponent;
