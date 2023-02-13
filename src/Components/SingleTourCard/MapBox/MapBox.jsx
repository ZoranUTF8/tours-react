import "./mapbox.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapBox = ({ startLocation, tourLocations }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [startLocationLng, setStartLocationLng] = useState(
    startLocation.coordinates[0]
  );
  const [startLocationLat, setStartLocationLat] = useState(
    startLocation.coordinates[1]
  );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [startLocationLng, startLocationLat],
      zoom: 10,
      scrollZoom: false,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    //? Add start location
    new mapboxgl.Marker()
      .setLngLat([startLocationLng, startLocationLat])
      .setPopup(
        new mapboxgl.Popup({
          className: "popup-container",
        }).setHTML("<div className='popupText'><p>Start location</p></div>")
      )
      .addTo(map.current);

    //? Add tour stops
    tourLocations.forEach((location) => {
      new mapboxgl.Marker()
        .setLngLat([...location.coordinates])
        .setPopup(
          new mapboxgl.Popup({
            className: "popup-container",
          }).setHTML(
            `<div className="popupText"><p>Day ${location.day} Name: ${location.description}</p></div>`
          )
        )
        .addTo(map.current);
    });
  });

  return (
    <div className="map-container">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapBox;
