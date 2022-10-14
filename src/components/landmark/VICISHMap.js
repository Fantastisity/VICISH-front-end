import React, {useState, useEffect, useMemo, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./VICISHMap.css";
import Axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import titleicon from "../../images/titleicon.png";
import backicon from "../../images/back.png";
import Pagination from "../general/Pagination";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function VICISHMap() {
  const location = useLocation();
  const { type } = location !== null ? location.state : null;
  const [currmarkers, setMarkers] = useState([])
  var pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const data = useRef(null), fetchedData = useRef(null)
  const mapLoaded = useRef(false);
  const Map = useRef(null);
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  const Directions = useRef(null)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/streets-v11",
      center: [144.9621, -37.8166],
      zoom: 12.5,
      accessToken: MAPBOX_TOKEN
    });
    const directions = new MapboxDirections({
      accessToken: MAPBOX_TOKEN,
      unit: "metric",
      profile: "mapbox/driving",
  });
  map.addControl(directions, "top-left");
    map.addControl(new mapboxgl.NavigationControl());
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    Map.current = map;
    Directions.current = directions
  }, [type]);

  const preloadMap = (dt) => {
    if (Map.current) {
      let tmp = {'type': 'FeatureCollection', 'features': []}
      for (var i in dt) {
        tmp.features.push({'type': "Feature", 'geometry': {'type': "Point", 'coordinates': [dt[i].lon, dt[i].lat]}, 'properties': {
          'description': dt[i].Description, 'title': dt[i].Title, 'id': i
        }})
      }
      Map.current.on('load', () => {
        data.current = tmp;
        const firstPageIndex = 0;
        const lastPageIndex = pageSize;
        const currentTableData = {'type': 'FeatureCollection', 'features' : data.current.features.slice(firstPageIndex, lastPageIndex)}  
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        if (Map.current.getSource("places")) Map.current.removeSource("places");
        Map.current.addSource('places', {
            'type': 'geojson',
            'data': currentTableData
          });
        buildLocationList(currentTableData);  
        addMarkers(currentTableData);
        mapLoaded.current = true
      });
    }
  }
  
  useEffect(() => {
    switch (type) {
      case 1:
        Axios.get("https://vicish.herokuapp.com/landmark").then((response) => {
          preloadMap(response.data)
        });
        break;
      case 2:
        Axios.get("https://vicish.herokuapp.com/music").then((response) => {
          preloadMap(response.data)
        })
        break;
      case 3:
        Axios.get("https://vicish.herokuapp.com/artwork").then((response) => {
          preloadMap(response.data)
        })
    } 
  }, [Map.current]);

  useEffect(() => {
    if (mapLoaded.current && data.current) {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      const currentTableData = {'type': 'FeatureCollection', 'features' : data.current.features.slice(firstPageIndex, lastPageIndex)}  
      const popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();
      if (Map.current.getSource("places")) Map.current.removeSource("places");
      Map.current.addSource('places', {
          'type': 'geojson',
          'data': currentTableData
      });
      buildLocationList(currentTableData);  
      addMarkers(currentTableData);
    }    
  }, [currentPage])

   function addMarkers(dt) {
    const el = document.createElement('div');
    el.innerHTML = ''
    var currentMarkers = []
    if (currmarkers !== null) {
      for (var i = currmarkers.length - 1; i >= 0; --i) {
        currmarkers[i].remove();
      }
    }

    for (const marker of dt.features) {
      const el = document.createElement('div');
      el.id = `marker-${marker.properties.id}`;
      el.className = 'marker';

      var mker = new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(Map.current)
      currentMarkers.push(mker)
      
      el.addEventListener('click', (e) => {
        zoomInMarker(marker);
        createPopUp(marker);
        const activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing = document.getElementById(
          `listing-${marker.properties.id}`
        );
        listing.classList.add('active');
      });
    }
    setMarkers(currentMarkers)
  }

  function buildLocationList(dt) {
    const listings = document.getElementById('listings');
    listings.innerHTML = ''
    for(var i = 0; i < dt.features.length; i++) {
      var cur = dt.features[i]
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      listing.id = `listing-${cur.properties.id}`;
      listing.className = 'item';

      const link = listing.appendChild(document.createElement('div'));
      link.className = 'place-name';
      link.id = i;
      link.innerHTML = "<img src=\"" + titleicon + "\"width=\"" + "20px" + "\">  " + `${cur.properties.title}`;
      
      listing.appendChild(document.createElement('br'))
      if (type !== 2) {
        let detail = listing.appendChild(document.createElement('span'))
        const bt = listing.appendChild(document.createElement('button'));
        bt.innerHTML = "Show Description"
        bt.className = "desc_but"
        bt.id = i
        detail.className = "detail"
        bt.addEventListener('click', function() {
          if (bt.innerHTML === "Show Description") bt.innerHTML = "Hide Description"
          else bt.innerHTML = "Show Description"
          if (detail.innerHTML.length) {
            detail.innerHTML = ''
          } else {
            detail.innerHTML = dt.features[this.id].properties.description + "<br/>" + "<br/>"
          }
        })
      }
      else {
        let tmp = listing.appendChild(document.createElement('a'))
        tmp.className = "desc_but";
        tmp.href = dt.features[i].properties.description;
        tmp.innerHTML = "Go to Website"
        tmp.setAttribute("target", "_blank")
      }
      
      link.addEventListener('click',  function() {
        var feature = dt.features[this.id]
        zoomInMarker(feature);
        createPopUp(feature);
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing = document.getElementById(
          `listing-${feature.properties.id}`
        );
        listing.classList.add('active');
      })
    }
  }

  function zoomInMarker(currentFeature) {
    Map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  const handlePopClick = (coord) => {
    Directions.current.setDestination([coord[0], coord[1]]); 
  }

  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    const popup = document.createElement('div');
    const title = document.createElement('h4')
    title.innerHTML = currentFeature.properties.title;
    const btn = document.createElement('button');
    btn.innerHTML = `Go Here`;
    btn.className = "dir-btn"
    btn.addEventListener('click', (e) => {
      handlePopClick(currentFeature.geometry.coordinates)
    });
    popup.appendChild(title)
    popup.appendChild(btn)
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setDOMContent(popup)
      .addTo(Map.current);
  }

  return (
    <div>
        <div className='sidebar'>
          <div className='side-heading'>
            <Link to="/explore-melb">
              <img src={backicon} alt="" style={{width: "23px", position: "absolute", marginTop: "4%", marginLeft: "-40%"}}/>
            </Link>
            <h1 style={{fontSize: "22px", marginTop: "60px", lineHeight: "20px", padding: "20px 2px", color: "black"}}>VENUE LOCATIONS</h1>
          </div>
          <div id='listings' className='listings'></div>
          {data.current && data.current.features && <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.current.features.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />}
        </div>
        <div id="map" className="map" style={{ marginTop: "20px" }} ></div>
    </div>
  )
};
