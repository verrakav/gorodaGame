import { useState } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
import { fetchUserCity } from "../utils/APIrelated";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);

  //FIXME: -5
  const [scoreVar, setScoreVar] = useState(0);

  const [invalidCity, setInvalidCity] = useState("");
  const [computerResponseCity, setComputerResponseCity] = useState("");

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleScore = () => {
    if (invalidCity) {
      setScoreVar(scoreVar);
    } else {
      setScoreVar(scoreVar + 5);
    }
  };

  const handleUserCity = (event) => {
    event.preventDefault();
    // console.log(inputCity);
    if (!inputCity || inputCity.length < 4) {
      alert("Choose a city");
    } else {
      // console.log("fetching city:", inputCity);
      fetchUserCity(inputCity, setSubmittedCities, setInvalidCity);
      console.log(submittedCities);
      setInputCity("");
    }
    handleScore();
  };

  return (
    <div className="play-window">
      <OutputPart
        invalidCity={invalidCity}
        submittedCities={submittedCities}
        computerResponseCity={computerResponseCity}
        setComputerResponseCity={setComputerResponseCity}
      />
      <InputPart
        inputCity={inputCity}
        setInputCity={setInputCity}
        submittedCities={submittedCities}
        setSubmittedCities={setSubmittedCities}
        handleInputChange={handleInputChange}
        handleUserCity={handleUserCity}
        invalidCity={invalidCity}
        setInvalidCity={setInvalidCity}
        setComputerResponseCity={setComputerResponseCity}
        handleScore={handleScore}
        scoreVar={scoreVar}
        setScoreVar={setScoreVar}
      />
    </div>
  );
}

export default PlayWindow;
