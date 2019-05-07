import React, { Component } from 'react'

export default class PageHeader extends Component {
	render(){
		return(
				<h2 style={headerStyles}>
					/rbs		
				</h2>			
		)
	}
}

let headerStyles = {
				'backgroundColor': 'black',
				'padding': '10px',
				'textAlign': 'center',
				'margin': '0 auto',
				'color': 'white',
}
