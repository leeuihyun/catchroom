import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WishCardBox = styled.div`
    background-color: white;
    border: 5px solid black;
    width: 235px;
    height: 240px;
    color: black;
    margin: 26px;
`;
function WishCard({ room }) {
    return (
        <>
            <Link to={"/single"} state={{ data: room }}>
                <WishCardBox>
                    <div>
                        <div
                            style={{
                                width: "120px",
                                height: "120px",
                            }}
                        >
                            <img src="이미지 주소" />
                        </div>
                        <div>대학교 : {room.roomInfo.대학교}</div>
                        <div>주소 : {room.roomInfo.주소}</div>
                    </div>
                </WishCardBox>
            </Link>
        </>
    );
}

export default WishCard;
