//FIXME: should alllow access the hidden variable here
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;

// NOTE: this API doesn't care for the lower/upper case

// //NOTE: API part extracted from handleCities
import cities from "cities.json";
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

//gets a city
export const fetchCity = async (
  inputCity
  // setSubmittedCities,
  // setInvalidCity
) => {
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

  return result;
};

//validates if the input exists
export const validateUserCity = async (
  inputCity,
  setSubmittedCities,
  setInvalidCity
) => {
  const result = await fetchCity(inputCity);
  if (result.includes(inputCity)) {
    setSubmittedCities((prev) => [...prev, inputCity]);
    setInvalidCity("");
    // console.log(result);
    // console.log(submittedCities);
  } else {
    setInvalidCity(`The city ${inputCity.toUpperCase()} doesn't exist`);
  }
};

//NOTE: this gets lat & long
export const fetchCoordinates = async (city) => {
  //coordinates should be an arr with lat & long
  // return coordinates;
};

//NOTE: extracted from OutputPart
//FIXME: change this to an API call to set computerResponseCity
export const jsonManipulations = (
  submittedCities,
  setComputerResponseCity,
  lastCity
) => {
  let foundCity = false;
  cities.forEach((el) => {
    //both vars work
    const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
    const cityName = el.name.toUpperCase();
    if (
      cityName.startsWith(lastLetter) &&
      !foundCity &&
      !submittedCities.includes(cityName)
      //FIXME: trying to add more logic here
      //&& !cityName.split(" ").includes("city")
    ) {
      console.log(`found: ${cityName}`);
      foundCity = true;
      submittedCities.push(cityName);
      setComputerResponseCity(`I say: ${cityName}`);
    }
  });
};

// export { fetchCity, jsonManipulations };
