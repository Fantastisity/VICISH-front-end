import React, {useState, useMemo} from "react";
import Axios from "axios";
import GeocoderControl from "./geocoderControl";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {Marker, Popup,  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import artworkicon from '../../images/painting.png';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function ArtworkMap() {
  const [viewState, setViewState] = useState({
      longitude: 144.946457,  
      latitude: -37.840935,
      zoom: 12
  });
  const [artwork, setArtworks] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const promptAlert = {
    width: '38px',
    height: '38px',
    background:'transparent'
  }

  const handleInput = (lon, lat) => {
    Axios.get("https://vicish.herokuapp.com/artwork", {params: { lat: lat, lon: lon }}).then((response) => {
        setArtworks(response.data);
        console.log(response.data);
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
              {artwork.map((city, index) => (
                <Marker
                  key={`marker-${index}`}
                  longitude={city.lon}
                  latitude={city.lat}
                  style={promptAlert}
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(city);
                  }}
                >
                  <img src={artworkicon} alt="" style={{width: "50px"}}/>
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
                    <p>{popupInfo.description}</p>
                  </div>
                </Popup>
              )}
          </Map>
    </div>
  );
};
