import React, { Component } from "react";
import logo from "../../Assets/Logo.svg";
import "../../Styles/Mobile/Navbar.scss";
import { Link } from "react-router-dom";

class MobileNavbar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="mobile-logo-wrapper">
          <Link to="/">
            <img id="mobile-logo" src={logo} />
          </Link>
        </div>
      </>
    );
  }
}

export default MobileNavbar;
