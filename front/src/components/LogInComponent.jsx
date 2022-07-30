import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import HrComponent from "./HrComponent";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../subcomponents/Button";
import Main from "../subcomponents/Main";
import LogInBox from "../subcomponents/LogInBox";
import { studentLogIn, hostLogIn } from "../reducers/userSlice";
import { useNavigate } from "react-router-dom";

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

const LogInComponent = () => {
    const dispatch = useDispatch();
    const { hostUser, studentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
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
            if (radio === "student") {
                dispatch(
                    studentLogIn({
                        email: email,
                        password: password,
                    })
                );
            }
            if (radio === "host") {
                dispatch(
                    hostLogIn({
                        data: {
                            email: email,
                            password: password,
                        },
                    })
                );
            }
        },
        [radio, email, password]
    );
    useEffect(() => {
        if (hostUser || studentUser) {
            navigate("/");
        }
    }, [hostUser, studentUser]);

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
