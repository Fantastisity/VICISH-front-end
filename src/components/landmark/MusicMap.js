import React, {useState, useMemo} from "react";
import Axios from "axios";
import GeocoderControl from "./geocoderControl";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {Marker, Popup,  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import musicicon from '../../images/concert.png';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function MusicMap() {
  const [viewState, setViewState] = useState({
      longitude: 144.946457,  
      latitude: -37.840935,
      zoom: 12
  });
  const [musicplaces, setPlaces] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const promptAlert = {
    width: '38px',
    height: '38px',
    background:'transparent'
  }

  const handleInput = (lon, lat) => {
    Axios.get("http://vicish.herokuapp.com/music", {params: { lat: lat, lon: lon }}).then((response) => {
        setPlaces(response.data);
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
              {musicplaces.map((city, index) => (
                <Marker
                  key={`marker-${index}`}
                  longitude={city.lon}
                  latitude={city.lat}
                  style={promptAlert}
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    console.log(city);
                    setPopupInfo(city);
                  }}
                >
                  <img src={musicicon} alt="" style={{width: "50px"}}/>
                </Marker>
              ))}
              {popupInfo && (
                <Popup
                  latitude={popupInfo.lat}
                  longitude={popupInfo.lon}
                  onClose={() => setPopupInfo(null)}
                  closeButton={false}
                  anchor="top"
                  offsetLeft={10}
                >
                  <div style={{fontSize: "1vw", fontFamily: "Poppins"}}>
                    <h5>{popupInfo.venue_name}</h5>
                    <span><a href = {popupInfo.website} target="_blank">To Website</a></span>
                  </div>
                </Popup>
              )}
          </Map>
    </div>
  );
};