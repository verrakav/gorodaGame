import React from "react";
import { Map, Marker } from "pigeon-maps";

//need to receive coordinates
function MapShow({ center, setCenter, zoom, setZoom }) {
  //use coordinates here
  // const [center, setCenter] = useState([50.1109, 8.6821]);
  // const [zoom, setZoom] = useState(11);
  return (
    <Map
      height={350}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}>
      <Marker width={50} anchor={[50.1109, 8.6821]} />
    </Map>
  );
}

export default MapShow;
