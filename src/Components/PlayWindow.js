import { useState, useEffect } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
import MapShow from "./MapShow/MapShow";
import { fetchUserCity } from "../utils/APIrelated";
import { manageUserCityMessage, manageGiveUp } from "../utils/Managers";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);
  const [userCityMessage, setUserCityMessage] = useState("");

  //FIXME: -5
  const [scoreVar, setScoreVar] = useState(0);

  const [invalidCity, setInvalidCity] = useState("");
  const [computerResponseCity, setComputerResponseCity] = useState("");

  const [center, setCenter] = useState([50.1109, 8.6821]);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    //NOTE: does the core game logic
    manageUserCityMessage(
      submittedCities,
      setUserCityMessage,
      setComputerResponseCity,
      setCenter
    );
  }, [submittedCities]);

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleScore = (invalidCity) => {
    if (invalidCity) {
      setScoreVar(scoreVar);
    } else {
      setScoreVar(scoreVar + 5);
    }
  };

  const handleUserCity = (event) => {
    event.preventDefault();
    if (!inputCity || inputCity.length < 4) {
      alert("Choose a city");
      setScoreVar(scoreVar);
    } else {
      fetchUserCity(inputCity, setSubmittedCities, setInvalidCity);
      setInputCity("");
      handleScore();
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
        center={center}
        setCenter={setCenter}
        zoom={zoom}
        setZoom={setZoom}
      />
    </div>
  );
}

export default PlayWindow;
