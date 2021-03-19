import React, { Component } from "react";

import "../../Styles/Home/LearnMore.scss";
import learnMoreImage from "../../Assets/shutterstock_696636415.jpg";

class LearnMore extends Component {
  state = {};

  componentDidMount = () => {
    console.log("data", this.props.dataForLearnMore);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div id="texts">
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                assumenda qui aspernatur modi possimus odit incidunt. Odit
                officia, ducimus eaque accusamus iure assumenda sit nesciunt,
                fuga in quo tenetur dicta?
              </small>
              <h5>
                .Sit fugiat illo quas adipisci delectus fuga in quo tenetur
                dicta
              </h5>
              <h5>.Sit fugiat illo quas adipisci delectus</h5>
              <h5>.Sit fugiat illo quas adipisci delectus</h5>
              <h5>.Sit fugiat illo quas adipisci delectus</h5>
              <button id="learn-more-button">Learn more</button>
            </div>
          </div>
          <div className="col-6">
            <img
              className="learn-more-image"
              src={learnMoreImage}
              alt="Learn more image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LearnMore;
