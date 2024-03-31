import "./PlayWindow.css";
import { useState, useEffect } from "react";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
import MapShow from "./Mapshow/MapShow";
import { fetchUserCity } from "../utils/APIrelated";
import {
  manageUserCityMessage,
  // manageComputerResponseCity,
  manageGiveUp
} from "../utils/Managers";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);
  const [userCityMessage, setUserCityMessage] = useState("");

  const [scoreVar, setScoreVar] = useState(0);

  const [invalidCity, setInvalidCity] = useState("");
  const [computerResponseCity, setComputerResponseCity] = useState("");

  //do I really neeed useEffect?
  useEffect(() => {
    //NOTE: does the user logic
    manageUserCityMessage(
      submittedCities,
      setUserCityMessage
      // setComputerResponseCity
    );
    //does the comp logic
    // manageComputerResponseCity(
    //   submittedCities,
    //   setComputerResponseCity,
    //   inputCity
    // );
  }, [submittedCities]);

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleUserCity = (event) => {
    event.preventDefault();
    //TODO: fix edge cases
    if (!inputCity || inputCity.length < 4) {
      alert("Choose a city");
      setScoreVar(scoreVar);
    } else {
      manageUserCityMessage(setSubmittedCities, setInvalidCity);
      setSubmittedCities(inputCity);
      setInputCity("");
      handleScore();
    }
  };

  const handleScore = (invalidCity) => {
    if (invalidCity) {
      setScoreVar(scoreVar);
    } else {
      setScoreVar(scoreVar + 5);
    }
  };

  const removeInvalidCityMessage = () => setInvalidCity("");

  const handleGiveUp = () => {
    manageGiveUp(
      setInputCity,
      setSubmittedCities,
      setInvalidCity,
      setScoreVar,
      setComputerResponseCity,
      scoreVar
    );
  };

  return (
    <div className="play-window">
      <OutputPart
        inputCity={inputCity}
        invalidCity={invalidCity}
        submittedCities={submittedCities}
        computerResponseCity={computerResponseCity}
        setComputerResponseCity={setComputerResponseCity}
        userCityMessage={userCityMessage}
      />
      <InputPart
        inputCity={inputCity}
        removeInvalidCityMessage={removeInvalidCityMessage}
        handleGiveUp={handleGiveUp}
        submittedCities={submittedCities}
        handleInputChange={handleInputChange}
        handleUserCity={handleUserCity}
        invalidCity={invalidCity}
        handleScore={handleScore}
        scoreVar={scoreVar}
      />
      <MapShow
        inputCity={inputCity}
        computerResponseCity={computerResponseCity}
        userCityMessage={userCityMessage}
      />
    </div>
  );
}

export default PlayWindow;
