import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <h1>Electrochip</h1>
            </div>
            <div className="nav">
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
