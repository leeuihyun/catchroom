import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HrComponent from "./HrComponent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
                        <img src="이미지 주소" />
                    </ImageBox>
                    <ContentBox>{children}</ContentBox>
                </Container>
            </Link>

            <HrComponent />
        </>
    );
};

export default Card;
