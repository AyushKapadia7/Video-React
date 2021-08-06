import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./App.css"
import Header from "./Header"


class Video extends Component {
    render () {
      return (
        
        <div className='player-wrapper'>
        <Header />
          <ReactPlayer 
            className='react-player fixed-bottom'
            url= "https://youtu.be/sFqaH-1BLrg"
            controls = {true}
            />
        </div>
      )
    }
  }

  export default Video;