import React, { useCallback, useState } from "react";
import Header from "./Header";
import HrComponent from "./HrComponent";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Main from "../subcomponents/Main";
import Button from "../subcomponents/Button";
import LogInBox from "../subcomponents/LogInBox";
import Footer from "./Footer";

const SignUpComponent = () => {
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [radio, setRadio] = useState("student");

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
    const onChangeAddress = useCallback((e) => {
        setAddress(e.target.value);
    }, []);
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onClickButton = useCallback(
        (e) => {
            console.log(radio);
            console.log(email);
            console.log(name);
            console.log(address);
            console.log(phone);
            console.log(password);
        },
        [email, password, name, address, phone, radio]
    );
    return (
        <>
            <Header color="black" />
            <HrComponent />
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
                        <input type="text" onChange={onChangeEmail} />
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
                        <input type="text" onChange={onChangeAddress} />
                    </div>
                    <div>
                        <div className="des">핸드폰 번호</div>
                        <input type="text" onChange={onChangePhone} />
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
