import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../images/living-room-ge16fb7fc8_1280.jpg";
import HrComponent from "./HrComponent";

const WishCardBox = styled.div`
    background-color: white;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    width: 236px;
    height: 240px;
    color: black;
    margin: 26px;
`;
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
`;

const TextBox = styled.div`
    color: black;
    font-weight: bold;
    margin-left: 4px;
`;
function WishCard({ room }) {
    return (
        <>
            <Link to={"/single"} state={{ data: room }}>
                <WishCardBox>
                    <div>
                        <div>
                            <ImageBox>
                                <img
                                    src={img}
                                    alt="집 이미지"
                                    width="222px"
                                    height="120px"
                                />
                            </ImageBox>
                        </div>
                        <HrComponent />
                        <TextBox>
                            <div>대학교 : {room.roomInfo.대학교}</div>
                            <div>주소 : {room.roomInfo.주소}</div>
                        </TextBox>
                    </div>
                </WishCardBox>
            </Link>
        </>
    );
}

export default WishCard;
