import React, { Component } from "react";
import "../../Styles/Mobile/MobileFooter.scss";

class MobileFooter extends Component {
  state = {};
  render() {
    return (
      <>
        <hr></hr>
        <div id="footer-wrapper">
          <p>
            Website Development by <span id="avamae-text">AVAMAE</span>
          </p>
        </div>
      </>
    );
  }
}

export default MobileFooter;
