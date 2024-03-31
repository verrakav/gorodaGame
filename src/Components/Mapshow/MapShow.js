import { Map, Marker } from "pigeon-maps";
import { useState, useEffect, useRef } from "react";
import { fetchCoordinates } from "../../utils/APIrelated";
import { manageRandomLocation } from "../../utils/Managers";

//FIXME: city is not valid var
function MapShow({ computerResponseCity, inputCity, userCityMessage }) {
  const [center, setCenter] = useState([]);
  const [zoom, setZoom] = useState();

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && (inputCity || computerResponseCity)) {
      //NOTE: this gets lat & long
      fetchCoordinates();
      //   mapRef.current.flyTo([city.latitude, city.longitude]);
    }
  }, [computerResponseCity, userCityMessage]);

  const defaultCentre = manageRandomLocation();

  return (
    //change default centre
    <Map
      height={400}
      defaultCenter={[50.879, 4.6997]}
      defaultZoom={11}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}>
      <Marker width={50} position={[50.879, 4.6997]} />
    </Map>
  );
}

export default MapShow;
