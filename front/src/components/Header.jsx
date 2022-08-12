import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    hostLogOut,
    studentLogOut,
    userSliceActions,
} from "../reducers/userSlice";
import HrComponent from "./HrComponent";
import { UserOutlined } from "@ant-design/icons";
const HeaderBox = styled.div`
    width: 100%;
    padding-top: 20px;
    margin-left: 30px;
    display: flex;
    z-index: 2;
    .logo {
        width: 70px;
        font-family: "surroundAir";
        font-weight: bold;
        font-size: 2rem;
        a {
            text-decoration: none;
            color: ${(props) => props.color || "white"};
        }
    }

    .box {
        font-size: 20px;
        padding-left: 8px;
        width: 92%;
        margin-right: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a {
            display: inline-block;
            letter-spacing: -1px;
            font-weight: normal;
            margin-left: 2rem;
            color: ${(props) => props.color || "white"};
            text-decoration: none;
            :hover {
                font-weight: bolder;
            }
        }

        .user {
            display: inline-block;
            letter-spacing: -1px;
            font-weight: normal;
            margin-left: 2rem;
            color: ${(props) => props.color || "white"};
            text-decoration: none;
            :hover {
                font-weight: bolder;
            }
            cursor: pointer;
        }
    }
`;

const Header = ({ color }) => {
    const { studentUser, hostUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onClickUser = useCallback(() => {
        dispatch(userSliceActions.showChange());
    }, []);
    return (
        <>
            <HeaderBox color={color}>
                <div className="logo">
                    <Link to="/">자방</Link>
                </div>
                <div className="box">
                    <Link to="/mypage">마이페이지</Link>
                    <Link to="/map">지도</Link>
                    <Link to="#">찜 목록</Link>
                    {studentUser || hostUser ? (
                        <div className="user" onClick={onClickUser}>
                            <UserOutlined />
                            {studentUser.info.name} 님
                        </div>
                    ) : (
                        <Link to="/logIn">회원가입 / 로그인</Link>
                    )}
                </div>
            </HeaderBox>
            <HrComponent></HrComponent>
        </>
    );
};

export default Header;
