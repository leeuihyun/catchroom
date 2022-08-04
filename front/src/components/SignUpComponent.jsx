import React, { useCallback, useState, useEffect } from "react";
import Header from "./Header";
import HrComponent from "./HrComponent";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Main from "../subcomponents/Main";
import Button from "../subcomponents/Button";
import LogInBox from "../subcomponents/LogInBox";
import Footer from "./Footer";
import { studentSignUp } from "../reducers/userSlice";
import { userSliceActions } from "../reducers/userSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [radio, setRadio] = useState("student");
    const { signUpDone, signUpError } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    const onChangeStudentRadioButton = useCallback((e) => {
        setRadio("student");
    }, []);
    const onChangeHostRadioButton = useCallback((e) => {
        setRadio("host");
    }, []);
    const onChangeEmail = useCallback((e) => {
        setEamil(e.target.value);
    }, []);
    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const onChangeCity = useCallback((e) => {
        setCity(e.target.value);
    }, []);
    const onChangeNumber = useCallback((e) => {
        setNumber(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onClickButton = useCallback(
        (e) => {
            console.log(radio);
            console.log(email);
            console.log(name);
            console.log(city);
            console.log(number);
            console.log(password);
            if (radio === "student") {
                dispatch(
                    studentSignUp({
                        email: email,
                        name: name,
                        city: city,
                        number: number,
                        password: password,
                    })
                );
            } else {
                dispatch(
                    studentSignUp({
                        //presidentSignUp
                        email: email,
                        name: name,
                        city: city,
                        number: number,
                        password: password,
                    })
                );
            }
        },
        [email, password, name, city, number, radio, dispatch]
    );
    useEffect(() => {
        if (signUpDone === true) {
            Toast.fire({
                icon: "success",
                title: "회원가입이 성공적으로 완료되었습니다.",
            }).then(function () {
                //회원가입이 완료시 =>
                navigate("/");
                console.log("회원가입이 완료되어 홈페이지로 이동");
            });
        }
        dispatch(userSliceActions.signUpClear());
    }, [signUpDone]);
    return (
        <>
            <Header color="black" />

            <Main>
                <LogInBox>
                    <div className="login">회원가입</div>
                    <HrComponent />
                    <div className="explain">
                        자방 서비스 이용을 위해 회원가입을 해주세요.
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
                        <div className="des">이메일</div>
                        <input type="email" onChange={onChangeEmail} />
                    </div>
                    <div>
                        <div className="des">비밀번호</div>
                        <input type="password" onChange={onChangePassword} />
                    </div>
                    <div>
                        <div className="des">이름</div>
                        <input type="text" onChange={onChangeName} />
                    </div>
                    <div>
                        <div className="des">주소</div>
                        <input type="text" onChange={onChangeCity} />
                    </div>
                    <div>
                        <div className="des">핸드폰 번호</div>
                        <input type="text" onChange={onChangeNumber} />
                    </div>
                    <div>
                        <Button onClick={onClickButton}>회원가입</Button>
                    </div>
                </LogInBox>
                <Footer></Footer>
            </Main>
        </>
    );
};

export default SignUpComponent;
