import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";
import logo from "../Assets/Logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-5">
            <img className="company-logo" src={logo} alt="Company logo" />
          </div>
          <div className="col-1 menu ">
            <Link to="/" className="nav-menu">
              HOME
            </Link>
          </div>
          <div className="col-1 ">
            <Link to="/about-us" className="nav-menu">
              ABOUT US
            </Link>
          </div>
          <div className="col-1 ">
            <Link to="/contact-us" className="nav-menu">
              CONTACT US
            </Link>
          </div>
          <div className="col-1">Log in</div>
        </div>
      </>
    );
  }
}

export default Navbar;
