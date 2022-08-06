import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import HrComponent from "./HrComponent";
import { wishRoom } from "../reducers/userSlice";
const SingleRoomComponent = () => {
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.room);
    const { rooms } = useSelector((state) => state.room);
    const { studentUser } = useSelector((state) => state.user);
    const test = {
        Column1: 0,
        주소: "서울특별시 광진구 자양동",
        가격: "전세 9000",
        룸타입: "원룸",
        면적: "19.83㎡",
        층: "1층",
        방화장실: "1개 / 1개",
        관리비: "2만 원",
    };
    const data = rooms[1];
    useEffect(() => {
        console.log(data);
        console.log(data.가격.substr(0, 2));
        //props로 전달받기 때문에 useEffect를 쓰지 않고 props로 받아온 값과 그 방의 id 가 필요함
    }, []); //렌더링할 때 데이터를 불러올 필요 없이 props로 전달하여 데이터를 전달받기 / 어짜피 클릭시이기 때문에
    const firstTitle = data.가격.substr(0, 2);
    const firstSecond = data.가격.substr(2);
    const second = data.관리비;
    const third = data.룸타입;
    const fourth = data.면적;
    const fifth = data.층;
    const sixth = data.주소;
    const onClickWish = useCallback(() => {
        if (studentUser) {
            dispatch(wishRoom("data"));
        } else {
            alert("로그인 해주세요"); // sweetAlert 이용하면 될 듯 함
        }
    }, [studentUser]);
    return (
        <>
            <Header color="black"></Header>
            <Main>
                <Box>
                    <ImageBox>이미지 넣을 곳</ImageBox>
                    <Price>가격정보</Price>
                    <Info>
                        <div>
                            <InfoTitle>
                                <div className="first">{firstTitle}</div>
                                <div className="second">{firstSecond}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                        <div>
                            <InfoTitle>
                                <div className="first">관리비</div>
                                <div className="second">{second}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                        <div>
                            <InfoTitle>
                                <div className="first">룸타입</div>
                                <div className="second">{third}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                        <div>
                            <InfoTitle>
                                <div className="first">면적</div>
                                <div className="second">{fourth}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                        <div>
                            <InfoTitle>
                                <div className="first">층</div>
                                <div className="second">{fifth}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                        <div>
                            <InfoTitle>
                                <div className="first">주소</div>
                                <div className="second">{sixth}</div>
                            </InfoTitle>
                        </div>
                        <HrComponent />
                    </Info>
                    <Footer></Footer>
                </Box>
            </Main>
        </>
    );
};

const InfoTitle = styled.div`
    display: flex;
    font-size: 18px;
    color: black;
    margin-top: 10px;
    .first {
        font-weight: bold;
        padding-left: 10px;
        width: 150px;
    }
    .second {
        font-weight: normal;
    }
`;
const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;
const ImageBox = styled.div`
    width: 1100px;
    height: 500px;
    background-color: yellow;
    color: black;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-left: 10px;
`;

const Price = styled.div`
    width: 1100px;
    height: 50px;
    color: black;
    margin-bottom: 30px;
    font-size: 25px;
    padding-left: 10px;
    font-weight: bold;
`;

const Info = styled.div`
    width: 1100px;
    height: 400px;

    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    margin: 20px;
    border-radius: 10px;
    width: 100px;
    height: 80px;
    background-color: white;
    color: white;
    font-size: 16px;
`;

export default SingleRoomComponent;
