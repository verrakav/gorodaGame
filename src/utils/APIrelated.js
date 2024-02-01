//alllows access the hidden variable here
const apiKey = process.env.REACT_APP_API_KEY;
const apiHost = process.env.REACT_APP_API_HOST;
//NOTE: took from the copy-book
// fetch("link").then((response) => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error("request failed");
// }, networkError => console.log(networkError.message)).then(json.Response) => {"code to do with the response"};

// older code version, googled
//supposed to check if there's such a city
const apiCallValidate = (city) => {
  const apiResponse = fetch(
    //switched to a different API: https://rapidapi.com/wirefreethought/api/geodb-cities/
    //the new one should return cities with 1 letter + further ideas
    "https://api.amadeus.net/v1/reference-data/locations/cities/keyword=PARIS"
  );
  //the endpoint
  const cityExists = apiResponse.json();
  return cityExists;
};

// export default apiCallValidate;
