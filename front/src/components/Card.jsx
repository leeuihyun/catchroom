import React, { useCallback, useState } from "react";
import styled from "styled-components";
import HrComponent from "./HrComponent";
import { useDispatch, useSelector } from "react-redux";

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
    const dispatch = useDispatch();
    const onClickContainer = useCallback(() => {
        console.log(data);
        //dispatch(modalActions.setIsOpen({ data: !isOpen }));
    }, []);
    return (
        <>
            <Container key={index} onClick={onClickContainer}>
                <ImageBox>
                    <img src="이미지 주소" />
                </ImageBox>
                <ContentBox>{children}</ContentBox>
            </Container>
            <HrComponent />
        </>
    );
};

export default Card;
