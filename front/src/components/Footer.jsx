import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    background-color: #716e6e;
    color: white;
    width: 100%;
    height: 26vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`;
const Footer = ({ children }) => {
    return <FooterBox>{children}</FooterBox>;
};

export default Footer;
