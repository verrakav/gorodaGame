import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

function InputPart({
  inputCity,
  setInputCity,
  handleUserCity,
  handleInputChange,
  submittedCities,
  setSubmittedCities,
  // invalidCity,
  setInvalidCity,
  setComputerResponseCity,
  handleScore,
  scoreVar,
  setScoreVar,
}) {
  const removeInvalidCityMessage = () => setInvalidCity("");
  return (
    <div className="input-part">
      <ScoreKeeper
        scoreVar={scoreVar}
        // setScoreVar={setScoreVar}
        submittedCities={submittedCities}
        handleScore={handleScore}
        // invalidCity={invalidCity}
      />
      <form onSubmit={handleUserCity}>
        <input
          className="input-field"
          type="text"
          onChange={handleInputChange}
          value={inputCity}
          placeholder="Name a city"
          onClick={removeInvalidCityMessage}></input>
        <BtnSubmit handleUserCity={handleUserCity} />
      </form>
      <BtnGiveUp
        inputCity={inputCity}
        setInputCity={setInputCity}
        submittedCities={submittedCities}
        setSubmittedCities={setSubmittedCities}
        setInvalidCity={setInvalidCity}
        handleInputChange={handleInputChange}
        scoreVar={scoreVar}
        setScoreVar={setScoreVar}
        setComputerResponseCity={setComputerResponseCity}
      />
    </div>
  );
}

export default InputPart;
