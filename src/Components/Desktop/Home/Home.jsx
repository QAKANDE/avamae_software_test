import React, { Component } from "react";
import Carousel from "./Carousel";
import LearnMore from "./LearnMore";
import Login from "./Login";
import OurServices from "./OurServices";

class Home extends Component {
  state = { slidesArray: [] };
  componentDidMount = async () => {
    const response = await fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details",
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    const carouselDetails = await response.json();
    this.setState({
      slidesArray: carouselDetails.Details,
    });
  };
  render() {
    return (
      <>
        <Carousel data={this.state.slidesArray} />
        <LearnMore dataForLearnMore={this.state.slidesArray} />
        <Login />
        <OurServices />
      </>
    );
  }
}

export default Home;
