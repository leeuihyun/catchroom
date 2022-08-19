import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HrComponent from "./HrComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../images/living-room-g9ae6e19b9_640.jpg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
`;

const ImageBox = styled.div`
    width: 100px;
    height: 120px;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Card = ({ children, index, data }) => {
    const onClickContainer = useCallback(() => {
        console.log(data);
    }, []);
    return (
        <>
            <Link to={"/single"} state={{ data: data }}>
                <Container key={index} onClick={onClickContainer}>
                    <ImageBox>
                        <img
                            src={img}
                            alt="자취방 이미지"
                            width="110px"
                            height="110px"
                        />
                    </ImageBox>
                    <ContentBox>{children}</ContentBox>
                </Container>
            </Link>

            <HrComponent />
        </>
    );
};

export default Card;
