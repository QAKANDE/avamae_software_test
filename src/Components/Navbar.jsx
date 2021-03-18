import React, { Component } from 'react'
import '../Styles/Navbar.scss'
import logo from '../Assets/Logo.svg'

class Navbar extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="row">
          <div className="col-5">
            <img className="company-logo" src={logo} alt="Company logo" />
          </div>
          <div className="col-1 menu">HOME</div>
          <div className="col-1">ABOUT US</div>
          <div className="col-1">CONTACT US</div>
          <div className="col-1">Log in</div>
        </div>
      </>
    )
  }
}

export default Navbar
