import React from "react";
import { Map, Marker } from "pigeon-maps";

//need to receive coordinates
function MapShow({ center, setCenter, zoom, setZoom }) {
  return (
    <Map
      height={350}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}>
      <Marker width={50} anchor={center} />
    </Map>
  );
}

export default MapShow;
