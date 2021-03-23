import React, { Component } from "react";
import "../../Styles/Mobile/MobileLogin.scss";

class MobileLogin extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="mobile-login-wrapper">
          <div className="mobile-login-text-wrapper">
            <p className="mobile-login-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio!
            </p>
            <small className="mobile-login-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              nesciunt impedit corporis quas voluptatibus fugit velit mollitia.
              Ipsam aliquid magni voluptate id minima molestiae odio, inventore
              exercitationem laborum deserunt accusantium.
            </small>

            <button id="mobile-login-button">Log in</button>
          </div>
        </div>
      </>
    );
  }
}

export default MobileLogin;
