/*global kakao*/
import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import SearchMapLayout from "../components/SearchMapLayout";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../reducers/roomSlice";
import { roomSliceActions } from "../reducers/roomSlice";
import SubMenu from "../subcomponents/SubMenu";

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

const SearchMap = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.user);
    const onChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(roomSliceActions.rememberLocation(text));
        dispatch(getRoom(text));
        setText("");
    };

    return (
        <div>
            <Header color="black" />
            {show && <SubMenu></SubMenu>}
            <Container>
                <SearchForm className="inputForm" onSubmit={handleSubmit}>
                    <Search
                        placeholder="검색어를 입력하세요"
                        onChange={onChange}
                        value={text}
                    />
                    <SearchBtn type="submit">검색</SearchBtn>
                </SearchForm>
                {show && <SubMenu></SubMenu>}
                <SearchMapLayout />
            </Container>
        </div>
    );
};

export default SearchMap;
