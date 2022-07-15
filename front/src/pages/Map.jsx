/*global kakao*/
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import HrComponent from "../components/HrComponent";
import { markerdata } from "../components/MarkerData";
import MapLayout from "../components/MapLayout";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 400px;
    top: 50px;
    border-width: thick;
    border-color: black;
    border-style: solid;
    border-radius: 30px;
    position: relative;
`;

const Search = styled.input`
    width: 300px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 70px;
    border-radius: 30px 0px 0px 30px;
    z-index: 2;
    font-size: 20px;
`;

const SearchForm = styled.form``;

const SearchBtn = styled.button`
    width: 50px;
    height: 45px;
    position: absolute;
    top: 10px;
    right: 20px;
    border-radius: 0px 30px 30px 0px;
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

export default function Map() {
    const [InputText, setInputText] = useState("");
    const [Place, setPlace] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(InputText);
        setInputText("");
    };

    return (
        <>
            <div
                className="section"
                style={{
                    backgroundColor: `${(props) =>
                        props.theme.questionPage.backgroundColor}`,
                }}
            >
                <Container>
                    <MapContainer>
                        <SearchForm
                            className="inputForm"
                            onSubmit={handleSubmit}
                        >
                            <Search
                                placeholder="검색어를 입력하세요"
                                onChange={onChange}
                                value={InputText}
                            />
                            <SearchBtn type="submit">검색</SearchBtn>
                        </SearchForm>
                        <MapLayout searchPlace={Place} />
                    </MapContainer>
                </Container>
            </div>
        </>
    );
}
