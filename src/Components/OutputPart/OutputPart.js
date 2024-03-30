import "../PlayWindow.css";

function OutputPart({ invalidCity, computerResponseCity, userCityMessage }) {
  return (
    <div className="output-part">
      <div>{userCityMessage}</div>
      <div>{computerResponseCity}</div>
      <div>{invalidCity}</div>
    </div>
  );
}

export default OutputPart;
