import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import ModalContainer from "./ModalContainer";
import { modalActions } from "../reducers/modalSlice";
import { logInCheck } from "../reducers/userSlice";
import { getRoom } from "../reducers/roomSlice";
import Modal from "react-modal";

Modal.setAppElement("body");
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
    const [Places, setPlaces] = useState([]);
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const COOKIE = localStorage.getItem("cookie");
    const { room } = useSelector((state) => state.room);
    const onClickCard = () => {
        dispatch(modalActions.setIsOpen({ data: true }));
    };
    useEffect(() => {
        if (COOKIE) {
            dispatch(logInCheck());
        }
    }, [COOKIE]);
    useEffect(() => {
        dispatch(getRoom(searchPlace));
    }, []);
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

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchPlace, placesSearchCB);

        function placesSearchCB(data, status, pagination) {
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
        }

        // 검색결과 목록 하단에 페이지 번호 표시
        function displayPagination(pagination) {
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
        }
        //마커 그리기
        function displayMarker(place) {
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
        }
    }, [searchPlace, isOpen]);
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
            {isOpen === true ? <ModalContainer /> : null}
            <ResultStyle>
                {Places.map((item, i) => (
                    <Card
                        key={item.place_name}
                        index={i}
                        data={item.address_name}
                        onClick={onClickCard}
                    >
                        <div>
                            <ResultTitle>{item.place_name}</ResultTitle>

                            {item.road_address_name ? (
                                <div>
                                    <span>{item.road_address_name}</span>
                                    <span>{item.address_name}</span>
                                </div>
                            ) : (
                                <span>{item.address_name}</span>
                            )}
                        </div>
                    </Card>
                ))}
                <div id="pagination"></div>
            </ResultStyle>
        </Divstyle>
    );
};

export default SearchMapLayout;
