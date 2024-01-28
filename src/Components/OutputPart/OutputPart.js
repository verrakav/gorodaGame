import React from "react";
//a useState to set the initial message
//and then change it to the ones from the parent?
function OutputPart({
  validationCity,
  otherMessage,
  submittedCities,
  setSubmittedCities,
  inputCity,
}) {
  return (
    <div className="output-part">
      {inputCity}
      {validationCity}
      {otherMessage}
    </div>
  );
}

export default OutputPart;
