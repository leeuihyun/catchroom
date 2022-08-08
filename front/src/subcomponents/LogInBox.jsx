import React from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 1px solid #e3e9e6;
    width: 550px;
    height: 680px;
    display: flex;
    margin-top: 192px;
    margin-bottom: 400px;
    padding-bottom: 10vh;
    position: relative;
    padding-top: 8px;
    flex-direction: column;

    align-items: flex-start;
    color: black;
    form {
        margin-left: 24px;
        margin-bottom: 10px;
    }
    .login {
        padding-top: 10px;
        padding-left: 16px;
        left: 0;
        font-size: 32px;
        font-weight: bold;
    }
    .explain {
        padding-top: 8px;
        padding-left: 16px;
        font-size: 16px;
        margin-bottom: 48px;
    }
    .text {
        padding-left: 16px;

        margin-bottom: 16px;
    }
    .des {
        margin-left: 32px;
    }
    input[type="password"],
    input[type="text"] {
        margin-bottom: 16px;
        margin-left: 32px;
        width: 30rem;
        height: 2rem;
        :focus {
            outline: none;
        }
        border-width: thin;
    }
`;
const LogInBox = ({ children }) => {
    return <Box>{children}</Box>;
};

export default LogInBox;
