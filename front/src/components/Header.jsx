import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
    width: 100%;
    position: fixed;
    margin: 1.5rem;
    display: flex;
    z-index: 2;
    .logo {
        font-family: "surroundAir";
        font-weight: bold;
        font-size: 2rem;
    }

    .box {
        font-size: 1.2rem;
        padding-left: 0.5rem;
        width: 92%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a {
            display: inline-block;
            letter-spacing: -1px;
            font-weight: normal;
            margin-left: 3rem;
            color: white;
            text-decoration: none;
            :hover {
                font-weight: bolder;
            }
        }
    }
`;

const Header = () => {
    /*const navigate = useNavigate();
    const onClickLogIn = useCallback(() => {
        navigate(`/login`);
        console.log("로그인");
    }, []);
    const onClickMap = useCallback(() => {
        navigate(`/map`);
    }, []);*/
    return (
        <HeaderBox>
            <div className="logo">자방</div>
            <div className="box">
                <Link to="/map">지도</Link>
                <Link to="#">찜 목록</Link>
                <Link to="#">회원가입 / 로그인</Link>
            </div>
        </HeaderBox>
    );
};

export default Header;
