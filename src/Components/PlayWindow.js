import "./PlayWindow.css";
import { useState, useEffect } from "react";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
import MapShow from "./MapShow/MapShow";
import { fetchUserCity } from "../utils/APIrelated";
import { manageUserCityMessage, manageGiveUp } from "../utils/Managers";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);
  const [userCityMessage, setUserCityMessage] = useState("");

  const [scoreVar, setScoreVar] = useState(-5);

  const [invalidCity, setInvalidCity] = useState("");
  const [computerResponseCity, setComputerResponseCity] = useState("");

  const [center, setCenter] = useState([50.1109, 8.6821]);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    console.log(submittedCities);
    //NOTE: does the core game logic
    const { hasCityBeenUsed } = manageUserCityMessage(
      submittedCities,
      setUserCityMessage,
      setComputerResponseCity,
      setCenter,
      inputCity,
      setInvalidCity
    );

    //FIXME: why it runs after 1st render?
    if (!hasCityBeenUsed) {
      setScoreVar(prevScore => prevScore + 5);
    } else {
      setScoreVar(scoreVar);
    }
  }, [submittedCities]);

  const handleInputChange = event => {
    setInputCity(event.target.value);
  };

  const handleUserCity = event => {
    event.preventDefault();
    //TODO: fix edge cases
    if (!inputCity || inputCity.length < 4) {
      alert("Choose a city");
    } else {
      fetchUserCity(inputCity, setSubmittedCities, setInvalidCity);
      setInputCity("");
    }
    // handleScore();
    // console.log(typeof invalidCity);
  };

  //NOTE: when used here the logc breaks
  // const handleScore = () => {
  //   const { hasCityBeenUsed } = manageUserCityMessage(
  //     submittedCities,
  //     setUserCityMessage,
  //     setComputerResponseCity,
  //     setCenter,
  //     inputCity,
  //     setInvalidCity
  //   );

  //   if (hasCityBeenUsed || invalidCity) {
  //     setScoreVar(scoreVar);
  //   } else {
  //     setScoreVar(prevScore => prevScore + 5);
  //   }
  // };

  const removeInvalidCityMessage = () => setInvalidCity("");

  const handleGiveUp = () => {
    manageGiveUp(
      setInputCity,
      setSubmittedCities,
      setInvalidCity,
      setScoreVar,
      setComputerResponseCity,
      scoreVar,
      setCenter
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
        // handleScore={handleScore}
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
