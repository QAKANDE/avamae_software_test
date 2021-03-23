import React, { Component } from "react";
import "../../../Styles/ContactUs/MessageSent.scss";
class MessageSent extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="message-sent-wrapper">
          <div className="svg-wrapper">
            <div className="treatment-method__icon__container">
              <div className="treatment-method__icon__outer_circle">
                <svg
                  className="treatment-methods_icon"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1024 768"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          class="st0"
                          d="M78.11,432.88c-9.55-8.82-10.16-23.85-1.35-33.41l105.92-114.84c8.81-9.56,23.84-10.16,33.4-1.35L400,452.99
				c9.55,8.81,24.12,7.8,32.35-2.26l355.98-434.7c8.23-10.06,23.2-11.55,33.26-3.31l120.9,99.01c10.05,8.24,11.54,23.2,3.3,33.26
				L453.07,746.74c-8.23,10.06-22.8,11.08-32.35,2.27L78.11,432.88z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div id="message-sent-success-wrapper">
            <h5>Your message has been sent</h5>
            <small>We will be in contact with you within 24 hours</small>
          </div>
        </div>
      </>
    );
  }
}

export default MessageSent;
