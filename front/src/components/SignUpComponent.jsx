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

const SignUpComponent = () => {
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [radio, setRadio] = useState("student");
    const { signUpDone, signUpError } = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
                title: "??????????????? ??????????????? ?????????????????????.",
            });
        }
        dispatch(userSliceActions.signUpClear());
    }, [signUpDone]);
    return (
        <>
            <Header color="black" />

            <Main>
                <LogInBox>
                    <div className="login">????????????</div>
                    <HrComponent />
                    <div className="explain">
                        ?????? ????????? ????????? ?????? ??????????????? ????????????.
                    </div>
                    <form action="">
                        <input
                            type="radio"
                            value="student"
                            name="set"
                            onChange={onChangeStudentRadioButton}
                            checked
                        />
                        <label>??????</label>
                        <input
                            type="radio"
                            value="host"
                            name="set"
                            onChange={onChangeHostRadioButton}
                        />
                        <label>?????????</label>
                    </form>
                    <div>
                        <div className="des">?????????</div>
                        <input type="text" onChange={onChangeEmail} />
                    </div>
                    <div>
                        <div className="des">????????????</div>
                        <input type="password" onChange={onChangePassword} />
                    </div>
                    <div>
                        <div className="des">??????</div>
                        <input type="text" onChange={onChangeName} />
                    </div>
                    <div>
                        <div className="des">??????</div>
                        <input type="text" onChange={onChangeCity} />
                    </div>
                    <div>
                        <div className="des">????????? ??????</div>
                        <input type="text" onChange={onChangeNumber} />
                    </div>
                    <div>
                        <Button onClick={onClickButton}>????????????</Button>
                    </div>
                </LogInBox>
                <Footer></Footer>
            </Main>
        </>
    );
};

export default SignUpComponent;
