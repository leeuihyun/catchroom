import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { logInCheck } from "../reducers/userSlice";
import { getRoom } from "../reducers/roomSlice";

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
    a {
        color: black;
        font-size: 20px;
        text-decoration: none;
        margin: 0 10px;
        &on {
            color: lightblue;
            font-weight: bold;
        }
    }
`;

const MapContainer = styled.div`
    width: 1020px;
    height: 615px;
    left: 20px;
    position: relative;
`;

const SearchMapLayout = ({ searchPlace }) => {
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    const { room } = useSelector((state) => state.room);
    const onClickCard = () => {
        //카드를 누르면 싱글페이지로 이동하고 데이터는 props로 전달한다.
        //수정해야함 전에는 모달창이었기 때문에
    };
    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);

    useEffect(() => {
        console.log(room);
    }, [room]);
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
        room?.forEach((item) => {
            geocoder.addressSearch(
                item.room_info.주소,
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
                                        item.room_info.주소 +
                                        "</div>"
                                );
                                infowindow.open(map, marker);
                            }
                        );
                    }
                }
            );
        });
        //const ps = new kakao.maps.services.Places();

        //ps.keywordSearch(searchPlace, placesSearchCB);

        /*function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);

                // 페이지 목록 보여주는 displayPagination() 추가
                displayPagination(pagination);
                setPlaces(data);
            }
        }*/

        // 검색결과 목록 하단에 페이지 번호 표시
        /*function displayPagination(pagination) {
            var paginationEl = document.getElementById("pagination"),
                fragment = document.createDocumentFragment(),
                i;

            // 기존에 추가된 페이지 번호 삭제
            while (paginationEl.hasChildNodes()) {
                paginationEl.removeChild(paginationEl.lastChild);
            }

            for (i = 1; i <= pagination.last; i++) {
                var el = document.createElement("a");
                el.href = "#";
                el.innerHTML = i;

                if (i === pagination.current) {
                    el.className = "on";
                } else {
                    el.onclick = (function (i) {
                        return function () {
                            pagination.gotoPage(i);
                        };
                    })(i);
                }

                fragment.appendChild(el);
            }
            paginationEl.appendChild(fragment);
        }*/
        //마커 그리기
        /*function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            });
            //마커 클릭시
            kakao.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(
                    '<div style="padding:5px;font-size:12px;">' +
                        place.place_name +
                        "</div>"
                );
                infowindow.open(map, marker);
            });
        }*/
    }, [searchPlace, room]);
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
                {room?.map((item, i) => (
                    <Card
                        key={item.id}
                        index={i}
                        data={item.room_info.주소}
                        onClick={onClickCard}
                    >
                        <div>
                            <ResultTitle>{item.room_info.주소}</ResultTitle>
                            <div>
                                <span>{item.room_info.가격}</span>
                                <span>{item.room_info.관리비}</span>
                                <span>{item.room_info.면적}</span>
                            </div>
                        </div>
                    </Card>
                ))}
                <div id="pagination"></div>
            </ResultStyle>
        </Divstyle>
    );
};

export default SearchMapLayout;
