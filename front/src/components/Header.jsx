import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hostLogOut, studentLogOut } from "../reducers/userSlice";

const HeaderBox = styled.div`
    width: 100%;
    top: 0;
    position: fixed;
    margin: 1.5rem;
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
        font-size: 1.2rem;
        padding-left: 0.5rem;
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
        .logOut {
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
    const onClickLogOut = useCallback(() => {
        if (studentUser) {
            dispatch(studentLogOut()); //학생 로그아웃
        }
        if (hostUser) {
            dispatch(hostLogOut()); //주인 로그아웃
        }
    }, [studentUser, hostUser]);

    return (
        <HeaderBox color={color}>
            <div className="logo">
                <Link to="/">자방</Link>
            </div>
            <div className="box">
                <Link to="/map">지도</Link>
                <Link to="#">찜 목록</Link>
                {studentUser || hostUser ? (
                    <div className="logOut" onClick={onClickLogOut}>
                        로그아웃
                    </div>
                ) : (
                    <Link to="/logIn">회원가입 / 로그인</Link>
                )}
            </div>
        </HeaderBox>
    );
};

export default Header;
