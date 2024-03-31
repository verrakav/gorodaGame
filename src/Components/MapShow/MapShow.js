import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

function MapShow() {
  const [center, setCenter] = useState([50.879, 4.6997]);
  const [zoom, setZoom] = useState(11);
  return (
    <Map
      height={350}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
}

export default MapShow;
