import React, { Component } from 'react';

export default function (ComposedComponent) {
	class Authentication extends Component {
		render() {
			return <ComposedComponent { ...this.props } />
		}
	}

	return Authentication;
}

// In some other location, we want to use this higher level component
//import Authentication // this is my high Order Component
//import Resources // This is the component I want to wrap

//const ComposedComponent = Authentication(Resources);
//
//<ComposedComponent/>
