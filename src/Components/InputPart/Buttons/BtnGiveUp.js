import "./Buttons.css";

//TODO: reset happens here
//score message "congrats your score is 1000"
function BtnGiveUp({
  setSubmittedCities,
  setInputCity,
  setInvalidCity,
  setScoreVar,
  scoreVar,
  setComputerResponseCity,
}) {
  const handleGiveUp = () => {
    setInputCity("");
    setSubmittedCities([]);
    setInvalidCity("");
    setScoreVar(-5);
    setComputerResponseCity("");
    alert(`Congrats! Your score is: ${scoreVar}`);
  };
  return (
    <button className="btn-giveup" onClick={handleGiveUp}>
      Give Up
    </button>
  );
}

export default BtnGiveUp;
