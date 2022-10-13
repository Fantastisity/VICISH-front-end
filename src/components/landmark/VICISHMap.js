import React, {useState, useEffect, useMemo} from "react";
import { Link, useLocation } from "react-router-dom";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./VICISHMap.css";
import Axios from "axios";
import titleicon from "../../images/titleicon.png";
import backicon from "../../images/back.png";
import Pagination from "../general/Pagination";
// import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from 'mapbox-gl';
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function VICISHMap() {
  const location = useLocation();
  const { type } = location !== null ? location.state : null;
  const [Map, setMap] = useState();
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [currmarkers, setMarkers] = useState([])
  const [stores, setStores] = useState({})
  var pageSize = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [mapReady, setMapReady] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    setPageIsMounted(true)
    switch (type) {
      case 1:
        Axios.get("https://vicish.herokuapp.com/landmark").then((response) => {
          setData(response.data);
        });
        break;
      case 2:
        Axios.get("https://vicish.herokuapp.com/music").then((response) => {
          setData(response.data);
        })
        break;
      case 3:
        Axios.get("https://vicish.herokuapp.com/artwork").then((response) => {
          setData(response.data);
        })
    }
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/streets-v11",
      center: [144.9621, -37.8166],
      zoom: 12.5,
      accessToken: MAPBOX_TOKEN
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    setMap(map);

  }, [type]);

  useEffect(() => {
    if (mapReady && stores) {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      const currentTableData = {'type': 'FeatureCollection', 'features' : stores.features.slice(firstPageIndex, lastPageIndex)}
      if (Map.getSource("places")) Map.removeSource("places");
      Map.addSource('places', {
          'type': 'geojson',
          'data': currentTableData
        });
        buildLocationList(currentTableData);
        addMarkers(currentTableData);
    }
  }, [currentPage])

  useMemo(() => {
    if (data && pageIsMounted) {
      let tmp = {'type': 'FeatureCollection', 'features': []}
      for (var i in data) {
        tmp.features.push({'type': "Feature", 'geometry': {'type': "Point", 'coordinates': [data[i].lon, data[i].lat]}, 'properties': {
          'description': data[i].Description, 'title': data[i].Title, 'id': i
        }})
      }
      Map.on('load', () => {
        setStores(tmp)
        setMapReady(true);
        setCurrentPage(1);
      });
    }
  }, [data]);
  /**
   * Add a marker to the map for every store listing.
   **/
   function addMarkers(dt) {
    const el = document.createElement('div');
    el.innerHTML = ''
    var currentMarkers = []
    if (currmarkers !== null) {
      for (var i = currmarkers.length - 1; i >= 0; --i) {
        currmarkers[i].remove();
      }
    }
    /* For each feature in the GeoJSON object above: */
    for (const marker of dt.features) {
      /* Create a div element for the marker. */
      const el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker';

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      var mker = new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(Map)
      currentMarkers.push(mker)
      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener('click', (e) => {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
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

  /**
   * Add a listing for each store to the sidebar.
   **/
  function buildLocationList(dt) {
    const listings = document.getElementById('listings');
    listings.innerHTML = ''
    for(var i = 0; i < dt.features.length; i++) {
      var store = dt.features[i]
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';

      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('div'));
      link.className = 'place-name';
      link.id = i;
      link.innerHTML = "<img src=\"" + titleicon + "\"width=\"" + "20px" + "\">  " + `${store.properties.title}`;
      /* Add details to the individual listing. */
      
      listing.appendChild(document.createElement('br'))
      let detail;
      if (type !== 2) {
        detail = listing.appendChild(document.createElement('span'))
        const bt = listing.appendChild(document.createElement('button'));
        bt.innerHTML = "Show Description"
        bt.className = "desc_but"
        bt.id = i
        bt.addEventListener('click', function() {
          if (bt.innerHTML === "Show Description") bt.innerHTML = "Hide Description"
          else bt.innerHTML = "Show Description"
          if (detail.innerHTML.length) {
            detail.innerHTML = ''
          } else {
            detail.innerHTML = dt.features[this.id].properties.description
          }
        })
      }
      else {
        detail = listing.appendChild(document.createElement('a'))
        detail.href = dt.features[i].properties.description;
        detail.innerHTML = "Go to Website"
        detail.setAttribute("target", "_blank")
      }
      detail.className = "detail"
      
      /**
       * Listen to the element and when it is clicked, do four things:
       * 1. Update the `currentFeature` to the store associated with the clicked link
       * 2. Fly to the point
       * 3. Close all other popups and display popup for clicked store
       * 4. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      link.addEventListener('click',  function() {
        var feature = dt.features[this.id]
        console.log("cl")
        flyToStore(feature);
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

  /**
   * Use Mapbox GL JS's `flyTo` to move the camera smoothly
   * a given center point.
   **/
  function flyToStore(currentFeature) {
    Map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  /**
   * Create a Mapbox GL JS `Popup`.
   **/
  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h4>${currentFeature.properties.title}</h4>`
      )
      .addTo(Map);
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
          {stores && stores.features && <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={stores.features.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />}
        </div>
        <div id="map" className="map" style={{ marginTop: "20px" }} ></div>
    </div>
  )
};
