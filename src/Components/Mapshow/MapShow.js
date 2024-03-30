import "leaflet/dist/leaflet.css";

import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useRef } from "react";
import { fetchCoordinates } from "../../utils/APIrelated";

//FIXME: city is not valid var
function MapShow({ computerResponseCity, inputCity, userCityMessage }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && (inputCity || computerResponseCity)) {
      //NOTE: this gets lat & long
      fetchCoordinates();
      //   mapRef.current.flyTo([city.latitude, city.longitude]);
    }
  }, [computerResponseCity, userCityMessage]);
  return (
    <MapContainer ref={mapRef} center={[40.7, -74]} zoom={12} scrollWheelZoom>
      The map is here
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* {city && <Marker position={[city.latitude, city.longitude]} />} */}
    </MapContainer>
  );
}

export default MapShow;
