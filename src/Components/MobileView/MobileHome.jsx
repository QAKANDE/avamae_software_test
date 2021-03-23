import React, { Component } from "react";
import MobileCarou from "./MobileCarou";
import MobileLearnMore from "./MobileLearnMore";
import MobileLogin from "./MobileLogin";
import MobileAboutUs from "./MobileAboutUs";

class MobileHome extends Component {
  state = {};
  render() {
    return (
      <>
        <MobileCarou />
        <MobileLearnMore />
        <MobileLogin />
        <MobileAboutUs />
      </>
    );
  }
}

export default MobileHome;
