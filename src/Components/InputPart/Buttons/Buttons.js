import "./Buttons.css";
import React from "react";
import BtnSubmit from "./BtnSubmit";
import BtnGiveUp from "./BtnGiveUp";
//NOTE: delete the whole thing?
function Buttons() {
  return (
    <div className="btn">
      <BtnSubmit />
      <BtnGiveUp />
    </div>
  );
}

export default Buttons;
