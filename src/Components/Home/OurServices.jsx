import React, { Component } from "react";

import "../../Styles/Home/OurServices.scss";
class OurServices extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="our-services-header">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <p>Ad deserunt dolor minima? Vel, minima recusandae.</p>
          </div>
          <div className="row">
            <div className="col-4">
              <small>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, ut deleniti inventore doloremque dolor eum, aut
                doloribus amet libero consequuntur, exercitationem voluptates
                cumque totam vitae! Voluptate ratione reiciendis ea enim. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae
                modi iusto assumenda quas dicta quia recusandae similique odio
                mollitia. Vero quam quas, excepturi molestias veniam adipisci
                non minus exercitationem.
              </small>
              <br></br>
              <small className="our-services-extra-text-below">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                officia molestiae laboriosam minus, corporis temporibus ab
                provident a exercitationem culpa cumque quae tempora veritatis
                cupiditate recusandae mollitia, blanditiis rem eveniet.
              </small>
            </div>
            <div className="col-4">
              <small>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, ut deleniti inventore doloremque dolor eum, aut
                doloribus amet libero consequuntur, exercitationem voluptates
                cumque totam vitae! Voluptate ratione reiciendis ea enim. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae
                modi iusto assumenda quas dicta quia recusandae similique odio
                mollitia. Vero quam quas, excepturi molestias veniam adipisci
                non minus exercitationem.
              </small>
              <br></br>
              <small className="our-services-extra-text-below">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                officia molestiae laboriosam minus, corporis temporibus ab
                provident a exercitationem culpa cumque quae tempora veritatis
                cupiditate recusandae mollitia, blanditiis rem eveniet.
              </small>
            </div>
            <div className="col-4">
              <small>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, ut deleniti inventore doloremque dolor eum, aut
                doloribus amet libero consequuntur, exercitationem voluptates
                cumque totam vitae! Voluptate ratione reiciendis ea enim. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae
                modi iusto assumenda quas dicta quia recusandae similique odio
                mollitia. Vero quam quas, excepturi molestias veniam adipisci
                non minus exercitationem. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Placeat, ut deleniti inventore
                doloremque dolor eum, aut doloribus amet libero consequuntur,
                exercitationem voluptates cumque totam vitae! Voluptate ratione
                reiciendis ea enim.
              </small>
            </div>
          </div>
          <div id="contact-us-btn-wrapper">
            <button id="contact-us-btn">Contact us</button>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
