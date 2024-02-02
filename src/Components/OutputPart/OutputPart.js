import React, { useState, useEffect } from "react";
import apiCallValidate from "../../utils/APIrelated";
//alllows access the local variable here
//FIXME: somehow they still got into github
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

//TODO: need some more styling with line height
// and the position of the messages (once they both show)

function OutputPart({ submittedCities, inputCity }) {
  //FIXME: the arr gets printed 4 times (x2 installHook; x2OutputPart)
  console.log(submittedCities);
  // console.log(submittedCities.length);

  const [userCityMessage, setUserCityMessage] = useState("");
  const [responseCity, setResponseCity] = useState("");
  //NOTE: responsible for printing the inputCity and checking if used before
  useEffect(() => {
    const manageUserCityMessage = () => {
      //store in consts here for convenience
      const lastIdx = submittedCities.length - 1;
      const lastCity = submittedCities[submittedCities.length - 1];

      if (submittedCities.length === 0) {
        setUserCityMessage(`You start :)`);
      } else if (
        submittedCities.length > 1 &&
        submittedCities.includes(lastCity) &&
        submittedCities.indexOf(lastCity) !== lastIdx
      ) {
        setUserCityMessage(`${lastCity} has been used before`);
      } /* if (validation from api) */ else {
        setUserCityMessage(`You say: ${lastCity}`);
      }
    };

    manageUserCityMessage();
  }, [inputCity, submittedCities]);

  //TODO: 1. inputCity: validation through API; (inputCity true or false)
  // 2. responseCity: API request;
  //conditions: starts with the last letter of inputCity && hasn't been used before
  //make sure the next inputCity starts with the last letter of responseCity

  // 1 & 2 should be a separate file for convenience?

  //IMPORTANT: API check should happen when the whole word is submitted

  //API to use: https://nominatim.org/release-docs/latest/api/Overview/
  //or this: https://developers.amadeus.com/
  // or a list to search: https://rapidapi.com/collection/city-data-api

  // working API
  //TODO: figure what should go in the url
  useEffect(() => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=${inputCity}in&limit=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    };
    setResponseCity("ПРИВЕТ!");
    //FIXME: the value set above instantly changes once pages loads
    //the function is called instantly and changes the word - how to fix?
    const fetchCity = async () => {
      const resultCity = await fetch(url, options);
      //can't read the returned value and erases 'ПРИВЕТ'?
      resultCity.json().then((json) => setResponseCity(json.city));
      // setResponseCity(json.city)
      // console.log(options.headers);
    };
    fetchCity();
    // console.log(resultCity);
  }, []);

  return (
    <div className="output-part">
      <div className="userCity">
        {inputCity} {userCityMessage}
      </div>
      <div className="responseCity"> {responseCity}</div>
    </div>
  );
}

export default OutputPart;
