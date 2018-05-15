import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Surv extends Component {
  render () {
    return <ReactPlayer
      url='https://www.youtube.com/watch?v=G1IbRujko-A'
      playing={false}
      volume='0.5'
      />
  }
}
export default Surv;
