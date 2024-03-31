//FIXME: should alllow access the hidden variable here
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;

import axios from "axios";
// NOTE: this API doesn't care for the lower/upper case
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

//NOTE: gets a city with AXIOS SUCESSFULLY returns a cityInfo object
export const fetchUserCity = async (name) => {
  const headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost
  };
  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=&namePrefix=${name}&limit=1`,
    headers: headers
  };

  // try {
  const response = await axios.request(options);
  // console.log( response);
  const latitude = response.data.data[0].latitude;
  const longitude = response.data.data[0].longitude;
  const coordinates = [latitude, longitude];
  // console.log(coordinates);
  const cityInfo = {
    name,
    coordinates
  };
  console.log("from fetchCity:", cityInfo);
  return cityInfo;
};
//   // catch (error) {
//   //   console.error(error);
//   // }
// };

//validates if the input exists
// export const validateUserCity = async (inputCity) => {
//   const cityInfo = await fetchCity(inputCity);
//   console.log(cityInfo);
//   return cityInfo;
// };

//NOTE: create a pause between requests
export function pause(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

//FIXME: get response
export const fetchResopnseCity = async (
  inputCity
  // setComputerResponseCity,
  // submittedCities
) => {
  if (inputCity === undefined) {
    console.log("no input");
    return;
  } else {
    const lastCity = inputCity[inputCity.length - 1];
    // console.log(lastCity);
    const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
    // console.log(lastLetter);

    const headers = {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost
    };
    const options = {
      method: "GET",
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=100000&namePrefix=${lastLetter}&limit=1`,
      headers: headers
    };

    try {
      const response = await axios.request(options);
      // console.log(response);
      const extractingVals = response.data.data[0];
      const compCityName = extractingVals.city;
      const compCityLatitude = extractingVals.latitude;
      const compCityLongitude = extractingVals.longitude;
      const compCityCoordinates = [compCityLatitude, compCityLongitude];
      // console.log(coordinates);
      const compCity = {
        compCityName,
        compCityCoordinates
      };
      // console.log(compCity);
      return compCity;
    } catch (error) {
      console.error(error);
    }
  }
};

// console.log(result);
