import React, { Component } from 'react';
import SharedHome from 'employee-portal-shared/src/screens/Home';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	onPressProfile = () => {
		this.props.navigation.navigate('Profile');
	}

	render() {
		return (
			<SharedHome
				onPressProfile={this.onPressProfile}
			/>
		);
	}
}
