import React from "react";
import "./index.css";
import { FaMapMarker } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="infos">
            <p>
              <a href="#">
                <FaMapMarker /> <span>Lorem ipsum dolor sit amet.</span>
              </a>
            </p>
            <p>
              <a href="#">
                <IoCall /> <span>Call: +994673246576</span>
              </a>
            </p>
            <p>
              <a href="#">
                <CiMail /> <span>demo@gmail.com</span>
              </a>
            </p>
          </div>
          <div className="contact">
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
