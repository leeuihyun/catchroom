import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import FullPage, {
    FullPageSections,
    FullpageSection,
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
import SubMenu from "../subcomponents/SubMenu";
import Blog from "../subcomponents/Blog";

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
    height: 100vh;
`;

const ThirdBox = styled.div`
    display: flex;
    margin-top: 75px;
    justify-content: center;
`;
const HomeLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.user);

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
                            {show && <SubMenu></SubMenu>}
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
                        <SecondBox>
                            <Second>
                                <Banner />
                            </Second>
                        </SecondBox>
                    </FullpageSection>
                    <FullpageSection style={sectionStyle}>
                        <ThirdPage>
                            <ThirdBox>
                                <Blog
                                    title="자방 이야기"
                                    content="자방 깃허브 구경하기"
                                    link="https://github.com/leeuihyun/catchroom"
                                ></Blog>
                                <Blog
                                    title="자방 이야기"
                                    content="자방 블로그에서 확인하기"
                                    link="https://velog.io/@mrvanc"
                                ></Blog>
                                <Blog
                                    title="자방 이야기"
                                    content="자방 노션에서 확인하기"
                                    link="https://www.notion.so/24037361792743ab9637e35613ad56c2"
                                ></Blog>
                            </ThirdBox>
                        </ThirdPage>
                        <Footer />
                    </FullpageSection>
                </FullPageSections>
            </FullPage>
        </Box>
    );
};

export default HomeLayout;
