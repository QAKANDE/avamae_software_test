import React, { Component } from "react";
import "../../../Styles/ContactUs/index.scss";
import contactUsImage from "../../../Assets/Logo.svg";
import MessageSent from "./MessageSent";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateContactUsForm = (err) => {
  let validInput = true;
  Object.values(err).forEach(
    (value) => value.length > 0 && (validInput = false)
  );
  return validInput;
};
class ContactUs extends Component {
  state = {
    fullName: "",
    email: "",
    phoneNumber01: "",
    phoneNumber02: "",
    message: "",
    addressLine1: "",
    addressLine2: "",
    cityTown: "",
    stateCounty: "",
    postCode: "",
    country: "",
    errorsForValidation: {
      fullName: "",
      email: "",
      phoneNumber01: "",
      phoneNumber02: "",
      message: "",
      addressLine1: "",
      addressLine2: "",
      cityTown: "",
      stateCounty: "",
      postCode: "",
      country: "",
    },
    secondPhoneNumber: false,
    includeAddressDetails: false,
    messageSent: true,
    messageSentSuccess: false,
    errorInForm: false,
    addAddressClassName: "check-button",
  };

  updateContactForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errorsForValidation;
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phoneNumber01":
        errors.phoneNumber01 =
          value.length < 11 ? "Phone number must be greater than 11" : "";
        break;
      case "phoneNumber02":
        errors.phoneNumber02 =
          value.length < 11 ? "Phone number must be greater than 11" : "";
        break;
      case "message":
        errors.message =
          value.length > 500 ? "Message cannot exceed 500 characters" : "";
        break;
      case "addressLine1":
        errors.addressLine1 =
          value.length < 5 ? "Address line must be greater than 5" : "";
        break;
      case "addressLine2":
        errors.addressLine2 =
          value.length < 5 ? "Address line must be greater than 5" : "";
        break;
      case "cityTown":
        errors.cityTown =
          value.length < 5 ? "City/Town must be greater than 5" : "";
        break;
      case "stateCounty":
        errors.stateCounty =
          value.length < 5 ? "State/County must be greater than 5" : "";
        break;
      case "postcode":
        errors.postCode =
          value.length <= 500 ? "Post Code must be greater than 5" : "";
        break;
      case "country":
        errors.country =
          value.length < 5 ? "Country must be greater than 5" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  displaySecondPhoneNumber = (e) => {
    e.preventDefault();
    this.setState({
      secondPhoneNumber: true,
    });
  };

  displayAddress = (e) => {
    e.preventDefault();
    this.setState({
      includeAddressDetails: true,
      addAddressClassName: "add-address-btn-checked",
    });
  };

  postContactUsDetails = async (e) => {
    e.preventDefault();

    if (validateContactUsForm(this.state.errorsForValidation)) {
      const phoneNumbers = [];
      if (this.state.phoneNumber02 === "") {
        phoneNumbers.push(this.state.phoneNumber01);
      } else {
        phoneNumbers.push(this.state.phoneNumber01, this.state.phoneNumber02);
      }

      const details = {
        Fullname: this.state.fullName,
        EmailAddress: this.state.email,
        PhoneNumbers: phoneNumbers,
        Message: this.state.message,
        bIncludeAddressDetails: this.state.includeAddressDetails,
        AddressDetails: {
          AddressLine1: this.state.addressLine1,
          AddressLine2: this.state.addressLine2,
          CityTown: this.state.cityTown,
          StateCounty: this.state.stateCounty,
          Postcode: this.state.postCode,
          Country: this.state.country,
        },
      };
      console.log(details);

      let res = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      const response = await res.json();
      if (response.Errors.length === 0) {
        this.setState({
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
          messageSentSuccess: true,
        });
      } else if (response.Errors[0].MessageCode === "Required") {
        this.setState({ errorInForm: true });
        setTimeout(() => {
          this.setState({ errorInForm: false });
        }, 2000);
      }
    } else {
      this.setState({ errorInForm: true });
      setTimeout(() => {
        this.setState({ errorInForm: false });
      }, 2000);
    }
    
  };
  render() {
    let errors = this.state.errorsForValidation;
    return (
      <>
        <hr></hr>
        <div className="container">
          <div className="contact-us-row">
            <div className="contact-us-col-6">
              <div>
                <h3>Contact us</h3>
                <small>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam veritatis, sint tenetur iusto nisi maiores eum
                  reprehenderit nesciunt autem, consequuntur minus, soluta nemo
                  fugiat
                </small>
              </div>
              {this.state.messageSentSuccess === true ? (
                <div>
                  <MessageSent />
                </div>
              ) : (
                <form autoComplete="off">
                  <div className="contact-us-row">
                    <div className="contact-us-col-6">
                      <div className="fullName">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          onChange={this.updateContactForm}
                          noValidate
                        />
                        {errors.fullName.length > 0 && (
                          <span className="error">{errors.fullName}</span>
                        )}
                      </div>
                    </div>
                    <div className="contact-us-col-6">
                      <div className="email">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          onChange={this.updateContactForm}
                          noValidate
                        />
                        {errors.email.length > 0 && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="phoneNumber01">
                    <label htmlFor="phoneNumber01">
                      Phone number 01 - <small>Optional</small>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber01"
                      onChange={this.updateContactForm}
                      noValidate
                    />
                    {errors.phoneNumber01.length > 0 && (
                      <span className="error">{errors.phoneNumber01}</span>
                    )}
                  </div>

                  {this.state.secondPhoneNumber === true ? (
                    <div>
                      <div className="phoneNumber02">
                        <label htmlFor="phoneNumber02">
                          Phone number 02 - <small>Optional</small>
                        </label>
                        <input
                          type="text"
                          name="phoneNumber02"
                          onChange={this.updateContactForm}
                          noValidate
                        />
                        {errors.phoneNumber02.length > 0 && (
                          <span className="error">{errors.phoneNumber02}</span>
                        )}
                      </div>
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

                  <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="text"
                      name="message"
                      onChange={this.updateContactForm}
                      noValidate
                    />
                    {errors.message.length > 0 && (
                      <span className="error">{errors.message}</span>
                    )}
                  </div>
                  <div>
                    <button
                      id={this.state.addAddressClassName}
                      onClick={(e) => this.displayAddress(e)}
                    ></button>
                    <small id="checkbox-wrapper">Add address details</small>
                  </div>

                  {this.state.includeAddressDetails === true ? (
                    <div>
                      <div className="contact-us-row">
                        <div className="contact-us-col-6">
                          <div className="addressLine1">
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input
                              type="text"
                              name="addressLine1"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.addressLine1.length > 0 && (
                              <span className="error">
                                {errors.addressLine1}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="contact-us-col-6">
                          <div className="addressLine2">
                            <label htmlFor="addressLine2">
                              Address Line 2 - <small>optional</small>
                            </label>
                            <input
                              type="text"
                              name="addressLine2"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.addressLine2.length > 0 && (
                              <span className="error">
                                {errors.addressLine2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="contact-us-row">
                        <div className="contact-us-col-3">
                          <div className="cityTown">
                            <label htmlFor="cityTown">City/Town</label>
                            <input
                              type="text"
                              name="cityTown"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.cityTown.length > 0 && (
                              <span className="error">{errors.cityTown}</span>
                            )}
                          </div>
                        </div>
                        <div className="contact-us-col-3">
                          <div className="stateCounty">
                            <label htmlFor="stateCounty">State/County</label>
                            <input
                              type="text"
                              name="stateCounty"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.stateCounty.length > 0 && (
                              <span className="error">
                                {errors.stateCounty}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="contact-us-col-3">
                          <div className="postCode">
                            <label htmlFor="postCode">Post code</label>
                            <input
                              type="text"
                              name="postCode"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.postCode.length > 0 && (
                              <span className="error">{errors.postCode}</span>
                            )}
                          </div>
                        </div>
                        <div className="contact-us-col-3">
                          <div className="country">
                            <label htmlFor="country">Country</label>
                            <input
                              type="text"
                              name="country"
                              onChange={this.updateContactForm}
                              noValidate
                            />
                            {errors.country.length > 0 && (
                              <span className="error">{errors.country}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {this.state.errorInForm === true ? (
                    <div className="error-message">
                      <p className="error-text">Oops, an error occured</p>
                      <p className="error-text">
                        Please complete required fields
                      </p>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <button
                    id="mobile-contact-submit-btn"
                    onClick={(e) => this.postContactUsDetails(e)}
                  >
                    <svg
                      className="mobile-contact-svg"
                      version="1.1"
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
                    <span>Submit</span>
                  </button>
                </form>
              )}
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
