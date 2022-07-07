import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import first from "../images/banner-970x250.62c67eaa5d2f6.png";
import second from "../images/banner-970x250.62c68279974d1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Box = styled.div`
    width: 100%;
    height: 300px;
    color: white;
`;

const Diiv = styled.div`
    margin-left: 220px;
`;
const Img = styled.img`
    left: 500px;
`;

const Banner = () => {
    const settings = {
        centermode: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
    };

    return (
        <Box>
            <div>
                <h1>slider</h1>
            </div>
            <div>
                <Slider {...settings}>
                    <Diiv>
                        <Img src={first} alt="banner"></Img>
                    </Diiv>
                    <Diiv>
                        <Img src={second} alt="banner"></Img>
                    </Diiv>
                </Slider>
            </div>
        </Box>
    );
};

export default Banner;
