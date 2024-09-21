import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="apple-icon">
        <ion-icon name="logo-apple"></ion-icon>
      </div>

      <div className="links-container">
        <a href="" className="nav-links">
          Store
        </a>
        <a href="" className="nav-links">
          Mac
        </a>
        <a href="" className="nav-links">
          iPhone
        </a>
        <a href="" className="nav-links">
          Support
        </a>
      </div>

      <div className="sec-links-container">
        <a href="" className="search-icon icon">
          <ion-icon name="search-outline"></ion-icon>
        </a>
        <a href="" className="bag-icon icon">
          <ion-icon name="bag-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default Nav;
