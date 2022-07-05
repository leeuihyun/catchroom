import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import HrComponent from "./HrComponent";
import { useSelector, useDispatch } from "react-redux";

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

const Button = styled.button`
    margin-top: 2rem;
    margin-left: 2rem;
    width: 89%;
    height: 20%;
    background-color: #2d36df;
    color: white;
    font-size: 1rem;
    border: none;
`;

const LogInBox = styled.div`
    border: 0.5px solid black;
    width: 550px;
    height: 500px;
    display: flex;
    margin-top: 12rem;
    margin-bottom: 18rem;
    padding-bottom: 26vh;
    position: relative;
    padding-top: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;

    .login {
        padding-top: 3rem;
        padding-left: 2rem;
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
        margin-left: 2rem;
        width: 88%;
        height: 80px;
        :focus {
            outline: none;
        }
    }
`;

const LogInComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [radio, setRadio] = useState("student");
    const onChangeStudentRadioButton = useCallback((e) => {
        setRadio("student");
    }, []);
    const onChangeHostRadioButton = useCallback((e) => {
        setRadio("host");
    }, []);
    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onClickLogIn = useCallback(
        (e) => {
            console.log(radio);
            console.log(email);
            console.log(password);
        },
        [radio, email, password]
    );
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
                    <form action="">
                        <input
                            type="radio"
                            value="student"
                            name="set"
                            onChange={onChangeStudentRadioButton}
                            checked
                        />
                        <label>학생</label>
                        <input
                            type="radio"
                            value="host"
                            name="set"
                            onChange={onChangeHostRadioButton}
                        />
                        <label>사장님</label>
                    </form>

                    <div className="text">아이디</div>
                    <input
                        type="text"
                        placeholder="이메일 주소 입력"
                        onChange={onChangeEmail}
                    />
                    <div className="text">비밀번호</div>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        onChange={onChangePassword}
                    />
                    <Button onClick={onClickLogIn}>로그인</Button>
                </LogInBox>

                <Footer>footer</Footer>
            </Main>
        </>
    );
};

export default LogInComponent;
