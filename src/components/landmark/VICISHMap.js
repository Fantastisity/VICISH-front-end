import React, {useState, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function VICISHMap() {
  const location = useLocation();
  const { destLat, destLon } = location.state;

  const mapContainerRef = useRef(null);
    const [lng, setLng] = useState(144.9621);
    const [lat, setLat] = useState(-37.8166);
    const [zoom, setZoom] = useState(9);

    let map
    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
            accessToken: MAPBOX_TOKEN
        });
        const directions = new MapboxDirections({
            accessToken: MAPBOX_TOKEN,
            unit: "metric",
            profile: "mapbox/driving",
            interactive: false
        });
        map.addControl(directions, "top-left");
        map.addControl(new mapboxgl.NavigationControl());
        map.on('load',  function() {
          directions.setDestination([destLon, destLat]);
      })
        return () => map.remove();
    }, []);
  return <div className="map-container" style={{ height: "100vh", marginTop: "10px" }} ref={mapContainerRef}/>
};
