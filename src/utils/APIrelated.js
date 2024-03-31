//FIXME: should alllow access the hidden variable here
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;

// NOTE: this API doesn't care for the lower/upper case

// import cities from "cities.json";
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

//gets a city
export const fetchCity = async (name) =>
  // cityName
  // setSubmittedCities,
  // setInvalidCity
  {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=${name}&limit=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost
      }
    };
    // console.log("fetching", cityName);

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    const cityName = result.data[0].city;
    // console.log(cityName);
    return cityName;
  };

//validates if the input exists
export const validateUserCity = async (
  inputCity,
  setSubmittedCities,
  setInvalidCity,
  submittedCities
) => {
  const city = await fetchCity(inputCity);
  console.log(city);
  if (city) {
    setSubmittedCities((prev) => [...prev, city]);
    setInvalidCity("");
    // console.log(result);
    console.log(submittedCities);
  } else {
    setInvalidCity(`The city ${inputCity.toUpperCase()} doesn't exist`);
  }
};

//NOTE: create a pause between requests
function pause(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

//FIXME: get response
export const fetchResopnseCity = async (
  inputCity,
  setComputerResponseCity,
  submittedCities
) => {
  console.log("getting", inputCity);
  const lastCity = inputCity[inputCity.length - 1];
  const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
  // console.log(lastLetter);
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=100000&namePrefix=${lastLetter}&limit=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost
    }
  };

  // await pause(5000);
  const response = await fetch(url, options);
  const resultJSON = await response.json();
  const result = resultJSON.data[0].name;
  console.log(result);
  setComputerResponseCity(result);
};

//NOTE: this gets lat & long
export const fetchCoordinates = async (city) => {
  //coordinates should be an arr with lat & long
  // return coordinates;
};

//NOTE: extracted from OutputPart
//FIXME: change this to an API call to set computerResponseCity
// export const jsonManipulations = (
//   submittedCities,
//   setComputerResponseCity,
//   lastCity
// ) => {
//   let foundCity = false;
//   cities.forEach((el) => {
//     //both vars work
//     const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
//     const cityName = el.name.toUpperCase();
//     if (
//       cityName.startsWith(lastLetter) &&
//       !foundCity &&
//       !submittedCities.includes(cityName)
//       //FIXME: trying to add more logic here
//       //&& !cityName.split(" ").includes("city")
//     ) {
//       console.log(`found: ${cityName}`);
//       foundCity = true;
//       submittedCities.push(cityName);
//       setComputerResponseCity(`I say: ${cityName}`);
//     }
//   });
// };

// export { fetchCity, jsonManipulations };
