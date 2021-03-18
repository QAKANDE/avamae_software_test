import React, { Component } from 'react'
import Carousel from './Carousel'
import LearnMore from "./LearnMore"

class Home extends Component {
  state = {}
  render() {
    return (
      <>
        <Carousel />
        <LearnMore/>
      </>
    )
  }
}

export default Home
