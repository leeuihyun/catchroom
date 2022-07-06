import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
    background-color: white;
    color: black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
`;

const Main = ({ children }) => {
    return <MainBox>{children}</MainBox>;
};

export default Main;
