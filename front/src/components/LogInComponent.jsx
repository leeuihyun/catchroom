import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import HrComponent from "./HrComponent";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../subcomponents/Button";

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
    font-size: 16px;
`;

const SignUpBox = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: flex-end;

    font-size: 16px;

    a {
        margin-right: 28px;
        color: #696969;
    }
`;

const LogInBox = styled.div`
    border: 1px solid #e3e9e6;
    width: 550px;
    height: 500px;
    display: flex;
    margin-top: 192px;
    margin-bottom: 210px;
    padding-bottom: 26vh;
    position: relative;
    padding-top: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: black;
    form {
        margin-left: 24px;
        margin-bottom: 10px;
    }
    .login {
        padding-top: 3rem;
        padding-left: 2rem;
        left: 0;
        font-size: 2rem;
        font-weight: bold;
    }
    .explain {
        padding-top: 8px;
        padding-left: 16px;
        font-size: 16px;
        margin-bottom: 48px;
    }
    .text {
        padding-left: 16px;

        margin-bottom: 16px;
    }
    .des {
        margin-left: 32px;
    }
    input[type="password"],
    input[type="text"] {
        margin-bottom: 16px;
        margin-left: 32px;
        width: 30rem;
        height: 2rem;
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
                    <div>
                        <div className="des">아이디</div>
                        <input
                            type="text"
                            placeholder="이메일 주소 입력"
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div>
                        <div className="des">비밀번호</div>
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <Button onClick={onClickLogIn}>로그인</Button>
                    </div>
                    <SignUpBox>
                        <Link to="/signup">회원가입</Link>
                    </SignUpBox>
                </LogInBox>

                <Footer>footer</Footer>
            </Main>
        </>
    );
};

export default LogInComponent;
