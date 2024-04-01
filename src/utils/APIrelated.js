//FIXME: should alllow access the hidden variable here
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;

// NOTE: this API doesn't care for the lower/upper case

// //NOTE: API part extracted from handleCities
import cities from "cities.json";
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

export const fetchUserCity = async (
  inputCity,
  setSubmittedCities,
  setInvalidCity
) => {
  // const newInput = inputCity.toLowerCase
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=${inputCity}&limit=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost
    }
  };
  const response = await fetch(url, options);
  const result = await response.text();
  //validates if the input exists
  console.log("getting", inputCity);
  return result;
  // if (result.includes(inputCity)) {
  //   setSubmittedCities((prev) => [...prev, inputCity]);
  //   setInvalidCity("");
  // } else {
  //   setInvalidCity(`The city ${inputCity} doesn't exist`);
  // }
};

//FIXME: change this to an API call to set computerResponseCity
export const jsonManipulations = (
  submittedCities,
  setComputerResponseCity,
  lastCity,
  setCenter
) => {
  let coordinates = [];
  let foundCity = false;
  cities.forEach((el) => {
    //both vars work
    const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
    const cityName = el.name.toUpperCase();
    if (
      cityName.startsWith(lastLetter) &&
      !foundCity &&
      !submittedCities.includes(cityName)
    ) {
      console.log(`found: ${cityName} ${el.lat}`);
      foundCity = true;
      submittedCities.push(cityName);
      setComputerResponseCity(`I say: ${cityName}`);
      coordinates = [el.lat, el.lng];
      //works
      // console.log(coordinates);
    }
  });
  setCenter(coordinates);
};
