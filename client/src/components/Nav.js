import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Google Books</h1>
      <Link to="/">Search</Link>
      <Link to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;
