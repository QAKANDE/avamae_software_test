import React, { Component } from "react";
import "../../Styles/Mobile/MobileLearnMore.scss";
import learnMoreImage from "../../Assets/shutterstock_696636415.jpg";

class MobileLearnMore extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <img id="learn-more-image" src={learnMoreImage} />
          <div id="texts-wrapper">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              assumenda qui aspernatur modi possimus odit incidunt. Odit
              officia, ducimus eaque accusamus iure assumenda sit nesciunt, fuga
              in quo tenetur dicta?
            </small>
            <h5>
              .Sit fugiat illo quas adipisci delectus fuga in quo tenetur dicta
            </h5>
            <h5>.Sit fugiat illo quas adipisci delectus</h5>
            <h5>.Sit fugiat illo quas adipisci delectus</h5>
            <h5>.Sit fugiat illo quas adipisci delectus</h5>
            <button id="mobile-learn-more-button">Learn more</button>
          </div>
        </div>
      </>
    );
  }
}

export default MobileLearnMore;
