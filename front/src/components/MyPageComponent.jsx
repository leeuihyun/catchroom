import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyPageComponent = () => {
    const { studentUser } = useSelector((state) => state.user);
    const wishRooms = studentUser?.wishRooms;

    return (
        <>
            <Header color="black"></Header>
            <Main>
                <WishText>관심 목록</WishText>
                <WishList>
                    {wishRooms?.map((room) => (
                        <WishCard>
                            <div>대학교 : {room.roomInfo.대학교}</div>
                            <div>주소 : {room.roomInfo.주소}</div>
                        </WishCard>
                    ))}
                </WishList>
            </Main>
        </>
    );
};

const Main = styled.div``;
const WishText = styled.div``;
const WishList = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    width: 100vw;
    height: 100vh;
    color: white;
`; //방 목록 띄울 곳
const WishCard = styled.div`
    background-color: white;
    width: 235px;
    height: 240px;
    color: black;
    margin: 26px;
`; //방 하나하나 목록
export default MyPageComponent;
