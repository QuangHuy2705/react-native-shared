import React from 'react';
import Header from './Header';
import HeaderTitle from '~/components/common/navBar/HeaderTitle';
import HeaderBackImage from '~/components/common/navBar/HeaderBackImage';

const navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0,
		backgroundColor: 'transparent',
	},
	headerBackTitle: null,
	headerBackTitleVisible: false,
	headerTitleAlign: 'center',
	header: props => <Header {...props} />,
	headerTitle: props => <HeaderTitle {...props} />,
	headerBackImage: props => <HeaderBackImage {...props} />,
	gestureEnabled: true,
};

export default navigationOptions;
