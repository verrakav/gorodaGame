import React from "react";
import "./HeaderRules.css";
import PopupWindow from "./PopupWindow";

function HeaderRules() {
  return (
    <header className="header-rules">
      <PopupWindow />
      <span className="centre">Let's Play Goroda!</span>
    </header>
  );
}

export default HeaderRules;
