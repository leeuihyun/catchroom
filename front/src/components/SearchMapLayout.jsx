import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { logInCheck } from "../reducers/userSlice";

const { kakao } = window;

const Divstyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const ResultTitle = styled.div`
    color: black;
    font-weight: bold;
`;

const ResultStyle = styled.div`
    width: 367px;
    height: 575px;
    overflow: scroll;
    position: absolute;
    top: 50px;
    bottom: 10px;
    right: 20px;
    background-color: white;
    font-size: 17px;
    color: black;
    z-index: 2;
`;

const Pagination = styled.div`
    margin-top: 3rem;
    color: black;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;
`;

const MapContainer = styled.div`
    width: 1020px;
    height: 615px;
    left: 20px;
    position: relative;
`;

const SearchMapLayout = () => {
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    const { room, searchCount } = useSelector((state) => state.room);
    const pageNumbers = Math.ceil(searchCount / 20);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 20;

    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);

    useEffect(() => {
        console.log(room);
    }, [room]);
    const onClickPage = useCallback((e) => {
        setPage(e.target.value);
        console.log(page);
    }, []);
    useEffect(() => {
        //dispatch 를 페이지마다 프론트안에서 서버와 x
        //서버에서 받아온 데이터 한번에 room에 저장 후 프론트안에서 자체적으로 페이지네이션 함
    }, [page]);
    useEffect(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        var markers = [];
        const container = document.getElementById("myMap");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        var geocoder = new kakao.maps.services.Geocoder();
        var value = null;
        var visibleRoomFirst = false;
        room?.map((item) => {
            geocoder.addressSearch(
                item.roomInfo.주소,
                function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        value = new kakao.maps.LatLng(result[0].y, result[0].x);

                        var marker = new kakao.maps.Marker({
                            map: map,
                            position: value,
                        });
                        kakao.maps.event.addListener(
                            marker,
                            "click",
                            function () {
                                infowindow.setContent(
                                    '<div style="padding:5px;font-size:12px;">' +
                                        item.roomInfo.주소 +
                                        "</div>"
                                );
                                infowindow.open(map, marker);
                            }
                        );
                    }

                    if (value && visibleRoomFirst === false) {
                        visibleRoomFirst = true;
                        map.setCenter(value);
                    }
                }
            );
        });
    }, [room, searchCount, pageNumbers]);
    return (
        <Divstyle>
            <MapContainer>
                <div
                    id="myMap"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                    }}
                />
            </MapContainer>

            <ResultStyle>
                {room?.slice(offset, offset + 20).map((item, i) => (
                    <Card key={item.id} index={i} data={item}>
                        <div>
                            <ResultTitle>{item.roomInfo.주소}</ResultTitle>
                            <div>
                                <span>{item.roomInfo.가격}</span>
                                <span>{item.roomInfo.관리비}</span>
                                <span>{item.roomInfo.면적}</span>
                            </div>
                        </div>
                    </Card>
                ))}
                <Pagination>
                    {Array(pageNumbers)
                        .fill()
                        .map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={onClickPage}
                                value={i + 1}
                            >
                                {i + 1}
                            </button>
                        ))}
                </Pagination>
            </ResultStyle>
        </Divstyle>
    );
};

export default SearchMapLayout;
