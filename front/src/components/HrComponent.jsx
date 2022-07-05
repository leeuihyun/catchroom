import React from "react";
import styled from "styled-components";

const Line = styled.hr`
    margin-top: 80px;
    height: 1px;
    width: 98%;
    border-width: 1px 0px 0px 0px;
    border-style: solid;
    opacity: 30%;
    border-color: #808080;
`;

const HrComponent = () => {
    return <Line></Line>;
};

export default HrComponent;
