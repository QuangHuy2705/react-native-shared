import React, { PureComponent } from 'react';
import Container from '~/ui/layout/Container';
import Text from '~/ui/primitives/Text';

export default class ProfileScreen extends PureComponent {
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
