import React from "react";
import "./HeaderRules.css";

//TODO: add the popup window with the rules
//at the bot of the page (don't forget the styling)
function HeaderRules() {
  return (
    <header className="header-rules">
      <a href="#" className="popup-rules">
        How to play?
      </a>
      <span className="centre">Let's Play Goroda!</span>
    </header>
  );
}

export default HeaderRules;
