import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AppHeader from '~/components/common/Header';
import NotificationIcon from '~/ui/common/Icon/Svg/NotificationIcon';


function Header({ title }) {
	const navigation = useNavigation();

	return (
		<AppHeader
			title={title}
			actions={[{
				id: "notification",
				icon: () => <NotificationIcon dot />,
				onPress: () => navigation.navigate('Notification')
			}]}
		>
		</AppHeader>
	);
}

export default Header;
