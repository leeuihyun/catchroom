import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
    margin-top: 30px;
    margin-left: 30px;
    width: 30.7rem;
    height: 50px;
    background-color: #0f75e2;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 3px;

    :hover {
        cursor: pointer;
    }
`;

const Button = ({ children }) => {
    return <ButtonBox>{children}</ButtonBox>;
};

export default Button;
