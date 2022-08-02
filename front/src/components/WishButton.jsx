import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

// 찜하기 버튼 미리 디자인해놓기

const Button = styled.button`
    margin: 20px;
    border-radius: 10px;
    width: 100px;
    height: 80px;
    background-color: white;
    color: white;
    font-size: 16px;
`;

const WishButton = () => {
    const dispatch = useDispatch();
    const studentUser = useSelector((state) => state.studentUser);

    const onClickWish = useCallback(() => {
        if (studentUser) {
            dispatch("찜하기()");
        } else {
            console.log("로그인 해주세요"); // sweetAlert 이용하면 될 듯 함
        }
    }, [studentUser]);
    return (
        <div>
            <Button onClick={onClickWish}>찜하기</Button>
        </div>
    );
};

export default WishButton;
