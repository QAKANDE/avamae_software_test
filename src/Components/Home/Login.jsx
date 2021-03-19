import React, { Component } from "react";

import "../../Styles/Home/Login.scss";
import loginImage from "../../Assets/shutterstock_1302552622.jpg";

class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="login-wrapper">
          <div className="container">
            <div className="login-text-wrapper">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio!
              </p>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                nesciunt impedit corporis quas voluptatibus fugit velit
                mollitia. Ipsam aliquid magni voluptate id minima molestiae
                odio, inventore exercitationem laborum deserunt accusantium.
              </small>
              <div id="login-button-wrapper">
                <button id="login-button">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
