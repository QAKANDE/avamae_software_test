import React, { Component } from "react";
import "../../Styles/Mobile/MobileAboutUs.scss";
import MobileContactForm from "./MobileContactForm";
import MobileMessageSuccess from "./MobileMessageSuccess";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="mobile-about-us-text-wrapper">
        <h5 className="mobile-about-us-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.adipisicing
          elit Possimus
        </h5>
        <h5 className="mobile-about-us-text">adipisicing elit Possimus</h5>
        <p className="mobile-about-us-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores unde at sunt quo fugiat a vitae incidunt necessitatibus quasi
          corrupti reiciendis eveniet tempore non, ut porro obcaecati? Eius,
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis maiores unde at sunt quo fugiat a vitae incidunt
          necessitatibus quasi corrupti reiciendis eveniet tempore non, ut porro
          obcaecati? Eius, praesentium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis maiores unde at sunt quo fugiat a vitae
          incidunt necessitatibus quasi corrupti reiciendis eveniet tempore non,
          ut porro obcaecati? Eius, praesentium.
        </p>
        <p className="mobile-about-us-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores unde at sunt quo fugiat a vitae incidunt necessitatibus quasi
          corrupti reiciendis eveniet tempore non, ut porro obcaecati? Eius,
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis maiores unde at sunt quo fugiat a vitae incidunt
          necessitatibus quasi corrupti reiciendis eveniet tempore non, ut porro
          obcaecati? Eius, praesentium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis maiores unde at sunt quo fugiat a vitae
          incidunt necessitatibus quasi corrupti reiciendis eveniet tempore non,
          ut porro obcaecati? Eius, praesentium.
        </p>
        <p className="mobile-about-us-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores unde at sunt quo fugiat a vitae incidunt necessitatibus quasi
          corrupti reiciendis eveniet tempore non, ut porro obcaecati? Eius,
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis maiores unde at sunt quo fugiat a vitae incidunt
          necessitatibus quasi corrupti reiciendis eveniet tempore non, ut porro
          obcaecati? Eius, praesentium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis maiores unde at sunt quo fugiat a vitae
          incidunt necessitatibus quasi corrupti reiciendis eveniet tempore non,
          ut porro obcaecati? Eius, praesentium.
        </p>
        <Link to="/mobile-contact-us">
          <button id="mobile-contact-us-btn">Contact us</button>
        </Link>
      </div>
    );
  }
}

export default AboutUs;
