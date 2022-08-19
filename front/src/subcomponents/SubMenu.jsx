import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { studentLogOut, hostLogOut } from "../reducers/userSlice";
import { userSliceActions } from "../reducers/userSlice";

const Sub = styled.div`
    display: flex;
    flex-direction: column;
    right: 20px;
    width: 150px;
    height: 210px;
    background-color: white;
    color: black;
    position: fixed;
    z-index: 100;
    div {
        padding: 10px;
        :hover {
            background-color: black;
            color: white;
        }
        cursor: pointer;
    }
`;
function SubMenu() {
    const dispatch = useDispatch();
    const { studentUser, hostUser } = useSelector((state) => state.user);
    const onClickLogOut = useCallback(() => {
        if (studentUser) {
            dispatch(studentLogOut()); //학생 로그아웃
        }
        if (hostUser) {
            dispatch(hostLogOut()); //주인 로그아웃
        }
        dispatch(userSliceActions.showFalse());
    }, [studentUser, hostUser]);
    return (
        <Sub>
            <div onClick={() => console.log("1")}>1:1 문의하기</div>
            <div>1:1 문의 내역</div>
            <div>찜목록 보기</div>
            <div>내 정보</div>
            <div onClick={onClickLogOut}>로그 아웃</div>
        </Sub>
    );
}

export default SubMenu;
