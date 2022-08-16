import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import HrComponent from "./HrComponent";
import { wishCancelRoom, wishRoom } from "../reducers/userSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userSliceActions } from "../reducers/userSlice";

const SingleRoomComponent = () => {
    const dispatch = useDispatch();
    const { studentUser, wishDone, wishCancelDone } = useSelector(
        (state) => state.user
    );
    const navigate = useNavigate();
    const location = useLocation();
    const result = location.state.data; // roompage에서 card 클릭시 안의 데이터 값들 전달하고 그것을 받아오는 useLocation 이용

    const Toast = Swal.mixin({
        toast: true,
        position: "center-center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    useEffect(() => {
        if (wishDone) {
            Toast.fire({
                icon: "success",
                title: "방 찜 등록이 완료되었습니다!",
            }).then(function () {
                //회원가입이 완료시 =>
                navigate("/");
                console.log("방 찜하기가 완료되었습니다!");
                dispatch(userSliceActions.wishClear());
            });
        }
        if (wishCancelDone) {
            Toast.fire({
                icon: "success",
                title: "찜등록 취소가 완료되었습니다!",
            }).then(function () {
                //회원가입이 완료시 =>
                navigate("/");
                console.log("방 찜 취소가 완료되었습니다!");
                dispatch(userSliceActions.wishCancelClear());
            });
        }
    }, [wishDone, Toast, wishCancelDone]);

    const id = result.id;
    const firstTitle = result.roomInfo.가격.substr(0, 2);
    const firstSecond = result.roomInfo.가격.substr(2);
    const second = result.roomInfo.관리비;
    const third = result.roomInfo.룸타입;
    const fourth = result.roomInfo.면적;
    const fifth = result.roomInfo.층;
    const sixth = result.roomInfo.주소;
    const onClickWish = useCallback(() => {
        if (studentUser) {
            console.log(id);
            console.log(firstTitle);
            dispatch(wishRoom(id)); //data의 아이디를 넘김
        } else {
            navigate("/logIn"); //로그인이 안되어 있기에 로그인 페이지로 이동함
        }
    }, [studentUser]);
    const onClickWishCancel = useCallback(() => {
        if (studentUser) {
            console.log(id);
            dispatch(wishCancelRoom(id));
        }
    }, [studentUser]);
    const onClickSeller = useCallback(() => {
        console.log("판매자 정보 보기 버튼 클릭 ( 모달창으로 구현) ");
    }, []);
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
                        <ButtonDiv>
                            <FirstButton onClick={onClickSeller}>
                                연락처보기
                            </FirstButton>
                            <SecondButton onClick={onClickWish}>
                                찜하기
                            </SecondButton>
                            <button onClick={onClickWishCancel}>찜 취소</button>
                        </ButtonDiv>
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

    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
`;
const ButtonDiv = styled.div`
    display: flex;
`;
const SecondButton = styled.button`
    margin-top: 20px;
    width: 100px;
    height: 70px;
    font-weight: bold;
    background-color: white;
    color: black;
    font-size: 16px;
    border-width: thin;
`;

const FirstButton = styled.button`
    margin-top: 20px;
    margin-left: 10px;
    width: 200px;
    height: 70px;
    font-weight: bold;
    background-color: #4169e1;
    color: white;
    font-size: 16px;
    border: 0;
    margin-right: 10px;
`;

export default SingleRoomComponent;
