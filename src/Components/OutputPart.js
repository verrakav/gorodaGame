import React from "react";
//a useState to set the initial message
//and then change it to the ones from the parent?
function OutputPart({
  validationCity,
  otherMessage,
  submittedCities,
  setSubmittedCities,
}) {
  return (
    <div className="output-part">
      Working on this
      {validationCity}
      {otherMessage}
    </div>
  );
}

export default OutputPart;
