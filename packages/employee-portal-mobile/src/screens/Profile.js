import React, { PureComponent } from 'react';
import Container from 'employee-portal-shared/src/components/layout/Container';
import Text from 'employee-portal-shared/src/components/primitives/Text';

export default class ProfileScreen extends PureComponent {
	static navigationOptions = {
		title: 'Profile',
	};

	render() {
		return (
			<Container
				flex={1}
				justifyContent='center'
				alignItems='center'
			>
				<Text variant='h4'>
					Profile Goes Here!!!
				</Text>
			</Container>
		);
	}
}
