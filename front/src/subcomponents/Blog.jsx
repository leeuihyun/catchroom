import React from "react";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
const BlogBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    background-color: #e6e6e6;
    color: black;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 7px;
`;
const TopBox = styled.div`
    background-color: blue;
    height: 5px;
`;
const TitleBox = styled.div`
    color: blue;
    font-weight: normal;
    text-decoration: underline;
    letter-spacing: 1px;
    text-underline-position: under;
    margin-top: 30px;
    margin-left: 25px;
`;

const ContentBox = styled.div`
    color: blue;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-left: 25px;
`;

const Arrow = styled.button`
    border: 0;
    outline: 0;
    cursor: pointer;
    margin-top: 200px;
`;

function Blog({ title, content, link }) {
    return (
        <a target="_blank" href={link}>
            <BlogBox>
                <TopBox />
                <TitleBox>{title}</TitleBox>
                <ContentBox>{content}</ContentBox>
                <Arrow>
                    <ArrowRightOutlined />
                </Arrow>
            </BlogBox>
        </a>
    );
}

export default Blog;
