import React, { Component } from "react";
import "../../Styles/ContactUs/index.scss";
import contactUsImage from "../../Assets/Logo.svg";
class ContactUs extends Component {
  state = {
    contactUsDetails: {
      fullName: "",
      email: "",
      phoneNumber01: "",
      phoneNumber02: "",
      message: "",
      addressLine1: "",
      addressLine2: "",
      cityTown: "",
      stateCounty: "",
      postcode: "",
      country: "",
    },
    secondPhoneNumber: false,
    includeAddressDetails: true,
    messageSent: true,
  };

  updateContactForm = (event) => {
    event.preventDefault();
    let contactUsDetails = this.state.contactUsDetails;
    let id = event.currentTarget.id;
    contactUsDetails[id] = event.currentTarget.value;
    this.setState({
      contactUsDetails,
    });
  };

  displaySecondPhoneNumber = (e) => {
    e.preventDefault();
    this.setState({
      secondPhoneNumber: true,
    });
  };

  postContactUsDetails = async (e) => {
    e.preventDefault();
    const details = {
      Fullname: this.state.contactUsDetails.fullName,
      EmailAddress: this.state.contactUsDetails.email,
      PhoneNumbers: [
        this.state.contactUsDetails.phoneNumber01.toString(),
        this.state.contactUsDetails.phoneNumber02.toString(),
      ],
      Message: this.state.contactUsDetails.message,
      bIncludeAddressDetails: this.state.includeAddressDetails,
      AddressDetails: {
        AddressLine1: this.state.contactUsDetails.addressLine1,
        AddressLine2: this.state.contactUsDetails.addressLine2,
        CityTown: this.state.contactUsDetails.cityTown,
        StateCounty: this.state.contactUsDetails.stateCounty,
        Postcode: this.state.contactUsDetails.postCode,
        Country: this.state.contactUsDetails.country,
      },
    };

    let response = await fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
  };
  render() {
    return (
      <>
        <hr></hr>
        <div className="container">
          <div className="contact-us-row">
            <div className="contact-us-col-6">
              <form autoComplete="off">
                <div className="contact-us-row">
                  <div className="contact-us-col-6">
                    <span>Full name</span>
                    <label>
                      <input
                        htmlFor="fullName"
                        type="text"
                        id="fullName"
                        value={this.state.contactUsDetails.fullName}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="contact-us-col-6">
                    <span>Email address</span>
                    <label>
                      <input
                        htmlFor="email"
                        type="email"
                        id="email"
                        value={this.state.contactUsDetails.email}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <span>
                  Phone number 01 - <small>Optional</small>
                </span>
                <label class="label-email">
                  <input
                    htmlFor="phoneNumber01"
                    type="tel"
                    max="20"
                    id="phoneNumber01"
                    value={this.state.contactUsDetails.phoneNumber01}
                    onChange={(e) => this.updateContactForm(e)}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </label>
                {this.state.secondPhoneNumber === true ? (
                  <div>
                    <span>
                      Phone number 02 - <small>Optional</small>
                    </span>
                    <label class="label-email">
                      <input
                        htmlFor="phoneNumber02"
                        type="tel"
                        max="20"
                        id="phoneNumber02"
                        value={this.state.contactUsDetails.phoneNumber02}
                        onChange={(e) => this.updateContactForm(e)}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                      />
                    </label>
                  </div>
                ) : (
                  <div></div>
                )}
                <button
                  id="add-new-num-btn"
                  onClick={(e) => this.displaySecondPhoneNumber(e)}
                >
                  Add new phone number
                </button>
                <span>
                  <div className="contact-us-row">
                    <div className="contact-us-col-6">Message</div>
                    <div className="contact-us-col-6">
                      Maximum text length is 500 characters
                    </div>
                  </div>
                </span>
                <label class="label-email">
                  <textarea
                    rows="4"
                    cols="50"
                    htmlFor="message"
                    maxlength="500"
                    id="message"
                    value={this.state.contactUsDetails.message}
                    onChange={(e) => this.updateContactForm(e)}
                    required
                  ></textarea>
                </label>
                {/* <div id="checkbox-container">
                  <input type="checkbox" id="todo" name="todo" value="todo" className="show-address-details" />
                  <label for="todo" data-content="Get out of bed">
                    Get out of bed
                  </label>
                </div> */}
                <div className="contact-us-row">
                  <div className="contact-us-col-6">
                    <span>Address line 1</span>
                    <label>
                      <input
                        htmlFor="addressLine1"
                        type="text"
                        id="addressLine1"
                        value={this.state.contactUsDetails.addressLine1}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="contact-us-col-6">
                    <span>
                      Address line 2 - <small>Optional</small>
                    </span>
                    <label>
                      <input
                        htmlFor="addressLine2"
                        type="text"
                        id="addressLine2"
                        value={this.state.contactUsDetails.addressLine2}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="contact-us-row">
                  <div className="contact-us-col-3">
                    <span>City/Town</span>
                    <label>
                      <input
                        htmlFor="cityTown"
                        type="text"
                        id="cityTown"
                        value={this.state.contactUsDetails.cityTown}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="contact-us-col-3">
                    <span>State/County</span>
                    <label>
                      <input
                        htmlFor="stateCounty"
                        type="text"
                        id="stateCounty"
                        value={this.state.contactUsDetails.stateCounty}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="contact-us-col-3">
                    <span>Postcode</span>
                    <label>
                      <input
                        htmlFor="postCode"
                        type="text"
                        id="postCode"
                        value={this.state.contactUsDetails.postCode}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="contact-us-col-3">
                    <span>Country</span>
                    <label>
                      <input
                        htmlFor="country"
                        type="text"
                        id="country"
                        value={this.state.contactUsDetails.country}
                        onChange={(e) => this.updateContactForm(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <button
                  id="submit-btn"
                  onClick={(e) => this.postContactUsDetails(e)}
                >
                  <div className="contact-us-row">
                    <div className="contact-us-col-6">
                      {this.state.messageSent === true ? (
                        <svg
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
                      ) : (
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 1200 960"
                        >
                          <path
                            class="st0"
                            d="M337.44,476.06L40.9,356.53c-26.86-9.22-30.06-28.58,12.52-37.9l1080.05-282.1
	c58.78-16.08,47.87,7.38,36.66,46.1L894.6,891.51c-14.85,46.05-24.46,47.63-62.28,13.54L630.65,726.83L483.14,838.28
	c-13.23,9.81-28.11,8.87-27.97-7.4l2.67-251.53c0.04-1.64,0.65-2.89,2.42-4.47l525.11-385.75c14.64-10.7,13.76-16.71-6.59-7.49
	L357.36,474.51C346.79,479.28,346.71,479.95,337.44,476.06"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="contact-us-col-6"> Submit</div>
                  </div>
                </button>
              </form>
              <div></div>
            </div>
            <div className="contact-us-col-6">
              <div id="contact-us-side-image">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
