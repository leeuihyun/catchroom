import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterBox>
            <div>팀 프로젝트</div>
            <div>
                개발자 : 이의현(Front),지상일(Back),이정호(크롤링 및 데이터)
            </div>
            <div>개발자 번호 : 010-0000-0000</div>
            <div>주소 : 경기도 고양시 오금2로 26</div>
            <div>개발자 이메일 : meta212121@naver.com</div>
        </FooterBox>
    );
};
const FooterBox = styled.div`
    background-color: #4d4d4d;
    color: #fffaf0;
    width: 100%;
    height: 26vh;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    font-weight: normal;
    letter-spacing: 1px;
`;

export default Footer;
