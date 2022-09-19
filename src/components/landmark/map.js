import React, {useState, useMemo} from "react";
import Axios from "axios";
import GeocoderControl from "./geocoderControl";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {Marker, Popup,  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import landmarker from '../../images/landmarker.svg';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function GenMap() {
  const [viewState, setViewState] = useState({
      longitude: 144.946457,  
      latitude: -37.840935,
      zoom: 12
  });
  const [landmarks, setLandmarks] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const promptAlert = {
    width: '38px',
    height: '38px',
    background:'transparent'
  }

  const handleInput = (lon, lat) => {
    Axios.get("https://vicish.herokuapp.com/landmark", {params: { lat: lat, lon: lon }}).then((response) => {
      setLandmarks(response.data);
    });
  }
  const onMove = React.useCallback(({viewState}) => {
    const newCenter = [viewState.longitude, viewState.latitude];
    setViewState(newCenter);
  }, [])
  return (
    <div style={{ height: "100vh", marginTop: "10px" }}>
      <Map
      {...viewState}
      mapStyle="mapbox://styles/jackieghost/cl7eqxr9r000314nyhfpov3wl"
      onMove = {onMove}
      mapboxAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl position="top-right" />
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />
        <GeocoderControl 
          mapboxAccessToken={MAPBOX_TOKEN} 
          position="top-left" 
          zoom="11"
          language="english" 
          handleInput={handleInput}/>
              {landmarks.map((city, index) => (
                <Marker
                  key={`marker-${index}`}
                  longitude={city.Longitude}
                  latitude={city.Latitude}
                  style={promptAlert}
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    console.log(city);
                    setPopupInfo(city);
                  }}
                >
                  <img src={landmarker} alt="land"/>
                </Marker>
              ))}
              {popupInfo && (
                <Popup
                  latitude={popupInfo.Latitude}
                  longitude={popupInfo.Longitude}
                  onClose={() => setPopupInfo(null)}
                  closeButton={false}
                  anchor="top"
                  offsetLeft={10}
                >
                  <div style={{fontSize: "1vw", fontFamily: "Poppins"}}>
                    <h5>{popupInfo.Title}</h5>
                    <p>{popupInfo.Description}</p>
                  </div>
                </Popup>
              )}
          </Map>
    </div>
  );
};