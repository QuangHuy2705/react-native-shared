import React from 'react';

import { useNavigation } from '@react-navigation/native';

import AppTabs from '~/components/common/Tabs';
import AppHeader from '~/components/common/Header';

// import ActivityIcon from '~/ui/common/Icon/Svg/ActivityIcon';
// import CalendarIcon from '~/ui/common/Icon/Svg/CalendarIcon';
import NotificationIcon from '~/ui/common/Icon/Svg/NotificationIcon';

export const Tabs = {
	feed: { id: '1', text: 'Feed', /*icon: ActivityIcon*/ },
	event: { id: '2', text: 'Event', /*icon: CalendarIcon*/ },
	group: { id: '3', text: 'Group', /*icon: CalendarIcon*/ },
};

function Header({ title, tab, onTabChange }) {
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
			<AppTabs
				tab={tab}
				tabs={[Tabs.feed, Tabs.group, Tabs.event]}
				onTabChange={onTabChange}
			/>
		</AppHeader>
	);
}

export default Header;
