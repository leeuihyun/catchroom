import Header from "./Header";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import WishCard from "./WishCard";
import SubMenu from "../subcomponents/SubMenu";
import { useCallback } from "react";
import { userSliceActions } from "../reducers/userSlice";
import Footer from "./Footer";

const MyPageComponent = () => {
    const { studentUser, show } = useSelector((state) => state.user);
    const wishRooms = studentUser?.wishRooms;
    const dispatch = useDispatch();
    const onClickUser = useCallback(() => {
        dispatch(userSliceActions.showFalse());
    }, []);
    return (
        <div>
            <Header color="black"></Header>
            {show && <SubMenu></SubMenu>}
            <Main onClick={onClickUser}>
                <WishText>관심 목록</WishText>
                <WishList>
                    {wishRooms?.map((room) => (
                        <WishCard room={room} />
                    ))}
                </WishList>
                <Footer></Footer>
            </Main>
        </div>
    );
};

const Main = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const WishText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    color: black;
    font-size: 30px;
    font-weight: bold;
    font-family: "surroundAir";
`;
const WishList = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding-bottom: 200px;
`; //방 목록 띄울 곳

export default MyPageComponent;
