import React, { Component } from 'react'
import ProfileImg from './ProfileImg.jpg'

export default class ProfilePic extends Component {
  render() {
    return (
      <div>
        <img style={profilePicStyle} src={ProfileImg}/>
      </div>
    )
  }
}

const profilePicStyle = {
  display: 'inlineBlock',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundRepeat: 'noRepeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}