import React, { useState, useEffect } from "react";
import "./Buttons.css";

const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

//NOTE: another prop that onClick
//ASK: instead of usning props and then props.handleCities - destructure when passing as arg?
function BtnSubmit({ handleCities, inputCity }) {
  //FIXME: moved from OutputPart:
  useEffect(() => {
    console.log("fetching city:", inputCity);
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=Moscow`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    };
    //FIXME: the value set above instantly changes once pages loads
    //the function is called instantly and changes the word - how to fix?
    const fetchCity = async () => {
      const resultCity = await fetch(url, options);
      //can't read the returned value and erases 'ПРИВЕТ'?
      console.log(resultCity);
      resultCity.json().then((json) => json.city);
      // setResponseCity(json.city);
      // console.log(options.headers);
    };
    fetchCity();
    // console.log(resultCity);
  }, [inputCity]);

  return (
    <button className="btn-submit" onClick={handleCities}>
      Gorod
    </button>
  );
}

export default BtnSubmit;
