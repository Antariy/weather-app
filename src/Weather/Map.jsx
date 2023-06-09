import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';


const containerStyle = {
  width: '100%',
  height: '400px'
};


function Map({ selectedTab, defaultTab }) {

  const forecastDateTimeSelect = useSelector((state) => state.forecastDateTimeSelect);
  const currentWeather = useSelector((state) => state.currentWeather);
  const forecastWeather = useSelector((state) => state.forecastWeather);
  const mapProps =
  selectedTab === defaultTab
    ? currentWeather
    : {
      main: forecastDateTimeSelect?.main || forecastWeather?.list[0].main,
      coord: forecastWeather?.city.coord,
      weather: forecastDateTimeSelect?.weather
    };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })


  return isLoaded && mapProps?.coord && mapProps?.weather ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: mapProps?.coord.lat,
        lng: mapProps?.coord.lon
      }}
      zoom={10}
    >
      <>
        <InfoWindow position={{
          lat: mapProps?.coord.lat,
          lng: mapProps?.coord.lon,
        }}
        >
          <div className='mapWindow'>
            <h5>{mapProps?.main?.temp}</h5>
            <p>{mapProps?.weather[0]?.description}</p>
          </div>
        </InfoWindow>
      </>
      </GoogleMap >
  ) : <></>
}

export default Map;