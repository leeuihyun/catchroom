import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

import Footer from "./Footer";
import HrComponent from "./HrComponent";

const Main = styled.div`
    background-color: white;
    color: black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LogInBox = styled.div`
    border: 0.5px solid black;
    width: 40vw;
    height: 60vh;
    display: flex;
    margin-top: 14rem;
    margin-bottom: 18rem;
    padding-bottom: 26vh;

    padding-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;

    .login {
        padding-top: 3rem;
        //padding-left: 2rem;
        left: 0;
        font-size: 2rem;
        font-weight: bold;
    }
    .explain {
        padding-top: 1rem;
        padding-left: 2rem;
        font-size: 1rem;
        margin-bottom: 3rem;
    }
    .text {
        padding-left: 2rem;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    input[type="password"],
    input[type="text"] {
        margin-bottom: 1rem;

        height: 5rem;
        :focus {
            outline: none;
        }

        font-size: 1rem;
    }
    button {
        background-color: #2d36df;
        color: white;
        font-size: 1rem;
        border: none;
    }
`;

const LogInComponent = () => {
    return (
        <>
            <Header color="black"></Header>
            <Main>
                <LogInBox>
                    <div className="login">로그인</div>
                    <HrComponent />
                    <div className="explain">
                        자방 서비스 이용을 위해 로그인해주세요.
                    </div>
                    <div className="text">아이디</div>
                    <input type="text" placeholder="이메일 주소 입력" />
                    <div className="text">비밀번호</div>
                    <input type="password" placeholder="비밀번호 입력" />
                    <button>로그인</button>
                </LogInBox>
                <Footer>footer</Footer>
            </Main>
        </>
    );
};

export default LogInComponent;
