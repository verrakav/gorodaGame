import { Map, Marker } from "pigeon-maps";
import { useEffect, useRef } from "react";
import { fetchCoordinates } from "../../utils/APIrelated";
import { manageRandomLocation } from "../../utils/Managers";

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

  const defaultCentre = manageRandomLocation();

  return (
    //change default centre
    <Map height={400} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
      {/* {city && <Marker position={[city.latitude, city.longitude]} />} */}
    </Map>
  );
}

export default MapShow;
