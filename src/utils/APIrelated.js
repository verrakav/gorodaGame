//NOTE: took from the copy-book
// fetch("link").then((response) => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error("request failed");
// }, networkError => console.log(networkError.message)).then(json.Response) => {"code to do with the response"};

//NOTE: older code version, googled
//supposed to check if there's such a city
const apiCallValidate = (city) => {
    try {
const apiResponse = await fetch(
  `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`
  );
  const apiData = await apiResponse.json();
  return apiData;
    }
};

export default apiCallValidate
