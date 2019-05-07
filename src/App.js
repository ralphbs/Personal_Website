import React from 'react';
import PageHeader from './PageHeader'
import Body from './Body'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default class App extends React.Component {

	componentDidMount(){
		AOS.init({
			duration : 2000
		})
	}

	render(){
		return (
    	<div>
					<PageHeader />
					<Body />
    	</div>
  	);
	}
}
