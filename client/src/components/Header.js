import React from "react";
import heroImage from "../images/library.jpg";

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: "120vw",
  height: "calc(100vw * .33333)", 
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>React Google Books Search</h1>
      <p>Search for and Save Books of Interest</p>
    </header>
  );
}

export default Header;
