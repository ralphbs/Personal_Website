import React, { Component } from 'react'
import ProfilePic from './ProfilePic'

export default class Body extends Component {
	render() {
		return(
			<div style={{ marginTop: '75px' }}>
							<div style={{ 'textAlign': 'center' }}>
								<ProfilePic />
							</div>
							<div style={boxA} data-aos="zoom-in">
							<code>I was born and raised in Beirut, Lebanon. At the age of 17, I moved to Montréal to pursue my
							undergraduate studies in Software Engineering at McGill University. I currently reside in San Francisco and work as a software engineer at Uber.
								Topics of interest for me are mental health, fitness, and politics.</code>
							</div>
							<div style={boxB} data-aos="zoom-in">
								<h2>Animated using <code>zoom-in</code>.</h2>
						  </div>
							<div style={boxB} data-aos="zoom-in">
								<h2>Animated using <code>zoom-in</code>.</h2>
						  </div>
						</div>
		)
	}
}

const boxA = {
  'width': '40%',
  'height': '200px',
  'background': 'white',
  'borderRadius': '2px',
  'padding': '10px',
  'color': 'grey',
  'textAlign': 'center',
	'margin': '10vh auto 0 auto'
}

const boxB = {
  'width': '40%',
  'height': '200px',
  'background': 'orange',
  'borderRadius': '2px',
  'padding': '10px',
  'color': 'white',
  'textAlign': 'center',
  'margin': '40vh auto 0 auto'
}


