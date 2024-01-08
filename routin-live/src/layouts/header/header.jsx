import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Logo</h1>
          <nav>
            <ul>
              <li>
                <NavLink className="h-navlink" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="h-navlink" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="h-navlink" to="/products">Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
