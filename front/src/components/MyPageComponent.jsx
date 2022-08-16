import Header from "./Header";
import styled from "styled-components";
import { useSelector } from "react-redux";
import WishCard from "./WishCard";
const MyPageComponent = () => {
    const { studentUser } = useSelector((state) => state.user);
    const wishRooms = studentUser?.wishRooms;

    return (
        <>
            <Header color="black"></Header>
            <Main>
                <WishText>관심 목록</WishText>
                <WishList>
                    {wishRooms?.map((room) => (
                        <WishCard room={room} />
                    ))}
                </WishList>
            </Main>
        </>
    );
};

const Main = styled.div``;
const WishText = styled.div``;
const WishList = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: white;
`; //방 목록 띄울 곳

export default MyPageComponent;
