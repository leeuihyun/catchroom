import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { modalActions } from "../reducers/modalSlice";
const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 1s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalBlock = styled.div`
    position: absolute;
    top: 6.5rem;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: black;
    width: 60rem;
    @media (max-width: 1120px) {
        width: 50rem;
    }
    @media (max-width: 50rem) {
        width: 80%;
    }
    min-height: 35rem;
    animation: modal-show 1s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;

const Close = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const ModalContainer = () => {
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const onClickModal = () => {
        dispatch(modalActions.setIsOpen({ data: !isOpen }));
    };
    return (
        <Container>
            <Background onClick={onClickModal} />
            <ModalBlock>
                <Close onClick={onClickModal}>닫기</Close>
                <Contents>this is modal</Contents>
            </ModalBlock>
        </Container>
    );
};

export default ModalContainer;
