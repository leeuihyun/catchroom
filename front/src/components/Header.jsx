import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
        font-family: "surroundAir";
        font-weight: bold;
        font-size: 2rem;
        padding-left: 0.5rem;
        width: 92%;
        display: flex;
        justify-content: flex-end;
        div {
            margin-left: 2rem;
        }
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const onClickLogIn = useCallback(() => {
        navigate(`/login`);
        console.log("로그인");
    }, []);
    const onClickMap = useCallback(() => {
        navigate(`/map`);
    }, []);
    return (
        <HeaderBox>
            <div className="logo">자방</div>
            <div className="box">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>
                <div>3</div>

                <button onClick={onClickLogIn}>로그인</button>

                <div>
                    <button onClick={onClickMap}>맵</button>
                </div>
            </div>
        </HeaderBox>
    );
};

export default Header;
