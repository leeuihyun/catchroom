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

const HomeLayout = () => {
    const navigate = useNavigate();
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
            navigate(`/searchmap/${text}`);
        },
        [text]
    );
    return (
        <Box>
            <FullPage>
                <FullPageSections>
                    <FullpageSection>
                        <Header></Header>
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
