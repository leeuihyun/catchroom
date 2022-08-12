import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import FullPage, {
    FullPageSections,
    FullpageSection,
    FullPageNavigation,
} from "@ap.cx/react-fullpage";
import Header from "./Header";
import Footer from "./Footer";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../reducers/roomSlice";
import { roomSliceActions } from "../reducers/roomSlice";
import { userSliceActions } from "../reducers/userSlice";
import { studentLogOut } from "../reducers/userSlice";
import { hostLogOut } from "../reducers/userSlice";

const Box = styled.div`
    background: linear-gradient(100deg, #1c16bc, #07aed0);
    width: 100%;
    height: 100%;

    h1 {
        color: white;
    }
`;

const SecondBox = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Second = styled.div`
    background: white;
    width: 100%;
    height: 60%;
    bottom: 0;
    position: absolute;
`;

const SubmitButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 1rem;

    font-size: 2rem;
`;
const Input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    opacity: 1;

    input {
        :focus {
            outline: none;
        }
        width: 50rem;
        height: 5rem;
        font-size: 2rem;
        border: none;
        -webkit-appearance: none;
        text-align: center;
        overflow: auto;
    }
`;
const ThirdPage = styled.div`
    width: 100%;
    background-color: white;
    color: black;
    height: 48vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    right: 20px;
    width: 150px;
    height: 210px;
    background-color: white;
    color: black;
    position: absolute;
    div {
        padding: 10px;
        :hover {
            background-color: black;
            color: white;
        }
        cursor: pointer;
    }
`;
const HomeLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { show, studentUser, hostUser } = useSelector((state) => state.user);
    const onClickLogOut = useCallback(() => {
        if (studentUser) {
            dispatch(studentLogOut()); //학생 로그아웃
        }
        if (hostUser) {
            dispatch(hostLogOut()); //주인 로그아웃
        }
        dispatch(userSliceActions.showFalse());
    }, [studentUser, hostUser]);

    const sectionStyle = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const [text, setText] = useState("");
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onClickButton = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(roomSliceActions.rememberLocation(text));
            dispatch(getRoom(text));
            navigate(`/searchmap/${text}`);
        },
        [text]
    );
    const onClickUser = useCallback(() => {
        dispatch(userSliceActions.showFalse());
    }, []);
    return (
        <Box>
            <FullPage>
                <FullPageSections>
                    <FullpageSection>
                        <Header></Header>
                        <div onClick={onClickUser}>
                            {show && (
                                <SubMenu>
                                    <div onClick={() => console.log("1")}>
                                        1:1 문의하기
                                    </div>
                                    <div>1:1 문의 내역</div>
                                    <div>찜목록 보기</div>
                                    <div>내 정보</div>
                                    <div onClick={onClickLogOut}>로그 아웃</div>
                                </SubMenu>
                            )}
                            <div style={sectionStyle}>
                                <h1>당신의 자취방을 찾아보세요</h1>
                                <Input>
                                    <input
                                        type="text"
                                        placeholder="학교명을 입력해주세요"
                                        onChange={onChangeText}
                                    />

                                    <SubmitButton onClick={onClickButton}>
                                        <SearchOutlined />
                                    </SubmitButton>
                                </Input>
                            </div>
                        </div>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <h1>screen 2</h1>
                        <SecondBox>
                            <Second>
                                <Banner />
                            </Second>
                        </SecondBox>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <ThirdPage>블로그 등이 연결될 부분입니다.</ThirdPage>
                        <Footer />
                    </FullpageSection>
                </FullPageSections>
            </FullPage>
        </Box>
    );
};

export default HomeLayout;
