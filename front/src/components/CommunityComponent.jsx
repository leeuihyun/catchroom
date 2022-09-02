import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import { Avatar, List, Pagination } from "antd";

function CommunityComponent() {
    const data = [
        {
            title: "순천향대역 근처 자취방 구합니다.",
            des: "010-8793-4024 연락주세요!!",
        },
        {
            title: "온양온천역 자취방 구해봅니다. 연락주세요.",
            des: "010-8723-4452 연락 기다립니다 !!",
        },
        {
            title: "온양온천역 자취방 구해봅니다. 연락주세요.",
            des: " 연락주세요. 010-2231-1345",
        },
        {
            title: "순천향대 자취방 구해봅니다. 연락주세요.",
            des: "2구역 쪽으로 구해봅니다. 010-5532-0908",
        },
        {
            title: "순천향대 자취방 구합니다. 연락주세요.",
            des: "1구역 쪽이면 더 좋을 것 같아요!! 010-3431..",
        },
    ];
    return (
        <>
            <Header color="black" />
            <CommunityBox>
                <CommunityForm>
                    <CommunityTitle>커뮤니티</CommunityTitle>
                    <ListDiv>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                                        }
                                        title={
                                            <a href="https://ant.design">
                                                {item.title}
                                            </a>
                                        }
                                        description={item.des}
                                    />
                                </List.Item>
                            )}
                        />
                    </ListDiv>
                    <PaginationDiv>
                        <Pagination defaultCurrent={1} total={50} />
                    </PaginationDiv>
                </CommunityForm>
                <Footer></Footer>
            </CommunityBox>
        </>
    );
}
const CommunityBox = styled.div`
    width: 100%;
    height: 120vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 150px;
`;

const CommunityForm = styled.div`
    width: 80%;
    height: 90%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
`;

const CommunityTitle = styled.div`
    font-weight: bold;
    font-size: 30px;
`;

const ListDiv = styled.div`
    margin-top: 20px;
`;
const PaginationDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default CommunityComponent;
