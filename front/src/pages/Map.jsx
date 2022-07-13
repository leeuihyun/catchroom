/*global kakao*/
import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import HrComponent from "../components/HrComponent";
import { markerdata } from "../components/MarkerData";

const MainBox = styled.div`
    width: 100%;
    height: 100%;
`;

const MapBox = styled.div`
    top: 10px;
    margin-left: 30px;
    width: 600px;
    height: 500px;
`;

export default function Map() {
    useEffect(() => {
        mapscript();
    }, []);

    var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(
                37.624915253753194,
                127.15122688059974
            ),

            level: 5,
        };

        //map
        const map = new kakao.maps.Map(container, options);

        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        markerdata.forEach((el) => {
            // 마커를 생성합니다
            new kakao.maps.Marker({
                //마커가 표시 될 지도
                map: map,
                //마커가 표시 될 위치
                position: new kakao.maps.LatLng(el.lat, el.lng),
                //마커에 hover시 나타날 title
                title: el.title,
                image: markerImage, //마커 이미지
            });
        });
        console.log(map.getCenter());
        kakao.maps.event.addListener(map, "dragend", function () {
            // 지도 중심좌표를 얻어옵니다
            var latlng = map.getCenter();

            var message =
                "변경된 지도 중심좌표는 " + latlng.getLat() + " 이고, ";
            message +=
                "경도는 " + latlng.getLng() + "이고 레벨은 " + map.getLevel();

            console.log(message);
        });
    };

    return (
        <MainBox>
            <Header color="black"></Header>

            <MapBox
                id="map"
                style={{ width: "500px", height: "400px" }}
            ></MapBox>
        </MainBox>
    );
}
