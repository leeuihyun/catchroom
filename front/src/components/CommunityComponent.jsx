import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

function CommunityComponent() {
    return (
        <>
            <Header color="black" />
            <CommunityBox>
                <CommunityForm>hi</CommunityForm>
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
    height: 80%;
    background-color: white;
    color: black;
`;
export default CommunityComponent;
