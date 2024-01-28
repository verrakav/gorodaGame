import React from "react";

function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "rgb(39, 54, 39)",
    fontSize: "10px",
  };
  return <footer style={footerStyle}>I'm the footer</footer>;
}

export default Footer;
