import React, { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    const { kakao } = window;

    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(lat, lon),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(lat, lon);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      },
      (error) => {
        console.error('현재 위치를 가져오지 못했습니다.', error);
      }
    );
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default MainPage;
