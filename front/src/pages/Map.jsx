/*global kakao*/
import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import HrComponent from "../components/HrComponent";

const MainBox = styled.div`
    width: 100%;
    height: 100%;
`;

const MapBox = styled.div`
    top: 10px;
`;

const Map = () => {
    useEffect(() => {
        var container = document.getElementById("map");
        var options = {
            center: new kakao.maps.LatLng(
                37.365264512305174,
                127.10676860117488
            ),
            level: 3,
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(
            37.365264512305174,
            127.10676860117488
        );
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
    }, []);

    return (
        <MainBox>
            <Header color="black"></Header>
            <HrComponent />
            <MapBox
                id="map"
                style={{ width: "500px", height: "400px" }}
            ></MapBox>
        </MainBox>
    );
};

export default Map;
