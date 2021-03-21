import React, { Component } from "react";
import aboutUsImage from "../../Assets/shutterstock_696636415.jpg";
import "../../Styles/AboutUs/index.scss";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <>
        <hr></hr>
        <div className="container">
          <div className="text-wrapper">
            <p className="aboutus-text">About us</p>
            <small className="aboutus-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              expedita at perferendis quas ea facilis dignissimos vitae quia.
            </small>
            <br></br>
            <small className="aboutus-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              magnam cupiditate aperiam itaque voluptate fuga perspiciatis,
              laudantium ratione eius culpa quas exercitationem quos iure dicta,
              officiis corrupti distinctio. Eius, consectetur Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Et quidem voluptate
              accusantium, praesentium sit itaque quos illo! Dignissimos maxime
              quibusdam illum, numquam, distinctio beatae{" "}
              <a id="colored-text">recusandae quod nemo</a> accusantium
              praesentium saepe.
            </small>
            <br></br>
            <p className="aboutus-text about-us-paragraph-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              magnam cupiditate aperiam itaque voluptate fuga perspiciatis,
              laudantium ratione eius culpa quas exercitationem quos iure dicta,
              officiis corrupti distinctio. Eius, consectetur Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Et quidem voluptate
              accusantium, praesentium sit itaque quos illo! Dignissimos maxime
              quibusdam illum, numquam, distinctio beatae recusandae quod nemo
              accusantium praesentium saepe.Et quidem voluptate accusantium,
              praesentium sit itaque quos illo! Dignissimos maxime quibusdam
              illum, numquam.
            </p>
          </div>
          <div>
            <img id="about-us-image" src={aboutUsImage} />
            <small className="aboutus-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              magnam cupiditate aperiam itaque voluptate fuga perspiciatis,
              laudantium ratione eius culpa quas exercitationem quos iure dicta,
              officiis corrupti distinctio. Eius, consectetur Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Et quidem voluptate
              accusantium, praesentium sit itaque quos illo! Dignissimos maxime
              quibusdam illum, numquam, distinctio beatae recusandae quod nemo
              accusantium praesentium saepe.Et quidem voluptate accusantium,
              praesentium sit itaque quos illo! Dignissimos maxime quibusdam
              illum, numquam.numquam, distinctio beatae recusandae quod nemo
              accusantium praesentium saepe.Et quidem voluptate accusantium,
              praesentium sit itaque quos illo! Dignissimos maxime quibusdam
            </small>
          </div>
          <div className="about-us-second-paragraph-text-wrapper">
            <p className="about-us-second-paragraph-text ">
              Lorem ipsum dolor sit adipisicing adipisicing elit:
            </p>
            <div className="about-us-list-text-wrapper">
              <p className="about-us-second-paragraph-text ">
                praesentium sit itaque quos illo! Dignissimos
              </p>
              <p className="about-us-second-paragraph-text ">
                accusantium praesentium saepe.Et quidem voluptate accusantium,
              </p>
              <p className="about-us-second-paragraph-text ">
                accusantium, praesentium sit itaque quos
              </p>
              <p className="about-us-second-paragraph-text ">
                illum, numquam.numquam, distinctio beatae recusandae
              </p>
            </div>
          </div>
          <div>
            <p className="about-us-second-paragraph-text ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              omnis praesentium doloremque porro, ducimus similique animi
              aspernatur, quidem est voluptate consequuntur? In fugit dolor
              nesciunt incidunt quaerat, ipsam numquam dolore.ducimus similique
              animi aspernatur, quidem est voluptate consequuntur? In fugit
              dolor nesciunt incidunt quaerat, ipsam numquam dolore.
            </p>
          </div>
          <div className="about-us-last-paragraph-wrapper">
            <p className="about-us-second-paragraph-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              omnis praesentium doloremque porro, ducimus similique animi
              aspernatur, quidem est voluptate consequuntur? In fugit dolor
              nesciunt incidunt quaerat, ipsam numquam dolore.ducimus similique
              animi aspernatur, quidem est voluptate consequuntur? In fugit
              dolor nesciunt incidunt quaerat, ipsam numquam dolore.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Excepturi omnis
              praesentium doloremque porro, ducimus similique animi aspernatur,
              quidem est voluptate consequuntur? In fugit dolor nesciunt
              incidunt quaerat, ipsam numquam dolore.ducimus similique animi
              aspernatur, quidem est voluptate consequuntur? In fugit dolor
              nesciunt incidunt quaerat, ipsam numquam dolore.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
