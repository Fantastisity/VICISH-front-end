import React, {useState, useEffect} from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import {
  Box,
  TextField,
  Button,
  Drawer
} from '@material-ui/core';
import Map, {Marker, Popup,  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import musicicon from '../../images/concert.png';
import artworkicon from '../../images/painting.png';
import landmarkicon from '../../images/landmarker.svg';
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function VICISHMap() {
  const location = useLocation();
  const { from } = location.state;
  const [viewState, setViewState] = useState({
      longitude: 144.9621,  
      latitude: -37.8166,
      zoom: 14
  });
  const [landmarks, setLandmarks] = useState([]);
  const [musicplaces, setMusicVenue] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const [enteredLandmarkNum, setEnteredLandmarkNum] = useState(10);
  const [enteredMusicNum, setEnteredMusicNum] = useState(10);
  const [enteredArtworkNum, setEnteredArtworkNum] = useState(10);

  const promptAlert = {
    width: '38px',
    height: '38px',
    background:'transparent'
  }

  const handleLandmarkInput = (e) => {
    Axios.get("https://vicish.herokuapp.com/landmark", {params: { num: enteredLandmarkNum }}).then((response) => {
      setLandmarks(response.data);
    });
  }

  const handleMusicInput = (e) => {
    Axios.get("https://vicish.herokuapp.com/music", {params: { num: enteredMusicNum }}).then((response) => {
      setMusicVenue(response.data);
    });
  }

  const handleArtworkInput = (e) => {
    Axios.get("https://vicish.herokuapp.com/artwork", {params: { num: enteredArtworkNum }}).then((response) => {
      setArtworks(response.data);
    });
  }

  useEffect(() => {
    if (from === "landmark") handleLandmarkInput(null);
    else if (from === "music") handleMusicInput(null);
    else if (from === "artwork") handleArtworkInput(null);
  }, [from]);


  const content = (
    <div>
      <TextField label="Enter a value between 0 and 116" id="outlined-size-normal" variant="filled" 
            style={{background: "rgba(204, 229, 254, 0.92)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.3px)",
            border: "1px solid rgba(254, 214, 204, 0.48)",
            width: "300px"}} onChange={(e) => setEnteredLandmarkNum(e.target.value)}/>
      <Box>
      <Button
              color="secondary"
              variant='contained'
              onClick={(e) => handleLandmarkInput(e)}
              style = {{marginLeft: "98px", marginTop: "10px", width: "200px", marginBottom: "10px", backgroundColor: "#e6d8cf", color: "black"}}
            >
              Find Landmarks
            </Button>
      </Box>

      <TextField label="Enter a value between 0 and 202" id="outlined-size-normal" variant="filled" 
            style={{background: "rgba(204, 254, 225, 0.9)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.3px)",
            border: "1px solid rgba(254, 214, 204, 0.48)",
            width: "300px"}} onChange={(e) => setEnteredMusicNum(e.target.value)}/>
      <Box>
      <Button
              color="secondary"
              variant='contained'
              onClick={(e) => handleMusicInput(e)}
              style = {{marginLeft: "98px", marginTop: "10px", width: "200px", marginBottom: "10px", backgroundColor: "#e6d8cf", color: "black"}}
            >
              Find Music Venues
            </Button>
      </Box>

      <TextField label="Enter a value between 0 and 201" id="outlined-size-normal" variant="filled" 
            style={{background: "rgba(228, 204, 254, 0.9)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.3px)",
            border: "1px solid rgba(254, 214, 204, 0.48)",
            width: "300px"}}  onChange={(e) => setEnteredArtworkNum(e.target.value)}/>
      <Box>
      <Button
              color="secondary"
              variant='contained'
              onClick={(e) => handleArtworkInput(e)}
              style = {{marginLeft: "98px", marginTop: "10px", width: "200px", marginBottom: "10px", backgroundColor: "#e6d8cf", color: "black"}}
            >
              Find Artwork Venues
            </Button>
      </Box>
    </div>
  );


  

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
        {content}
        {/* <GeocoderControl 
          mapboxAccessToken={MAPBOX_TOKEN} 
          position="top-left" 
          zoom="11"
          language="english" 
          placeholder="Enter an Address"
          handleInput={handleInput}/> */}
              {landmarks && landmarks.map((city, index) => (
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
                  <img src={landmarkicon} alt=""/>
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

            {musicplaces && musicplaces.map((city, index) => (
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
                  <img src={musicicon}  alt="" style={{width: "30px"}}/>
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

              {artworks && artworks.map((city, index) => (
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
                  <img src={artworkicon}  alt="" style={{width: "30px"}}/>
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
