import React, { PureComponent } from 'react';
import Text from '~/ui/primitives/Text';

class HeaderTitle extends PureComponent {
	render() {
		return (
			<Text fontWeight='bold' {...this.props} />
		);
	}
}

export default HeaderTitle;
