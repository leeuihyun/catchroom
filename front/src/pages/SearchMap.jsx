/*global kakao*/
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import MapLayout from "../components/MapLayout";
import { useParams } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
`;

const Search = styled.input`
    width: 310px;
    height: 40px;
    position: absolute;
    right: 70px;
    z-index: 2;
    font-size: 20px;
`;

const SearchForm = styled.form``;

const SearchBtn = styled.button`
    width: 50px;
    height: 45px;
    position: absolute;

    right: 20px;
    z-index: 2;
    background-color: #fff;
    color: #333;
    &:hover {
        cursor: pointer;
        background-color: #333;
        color: #fff;
    }
`;

const MainBox = styled.div`
    width: 100%;
    height: 100%;
`;
const SearchMap = () => {
    const { value } = useParams();
    return <div>params : {value}</div>;
};

export default SearchMap;
