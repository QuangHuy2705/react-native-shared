import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AppTabs from '~/components/common/Tabs';
import AppHeader from '~/components/common/Header';

// import TaskIcon from '~/ui/common/Icon/Svg/TaskIcon';
// import RequestIcon from '~/ui/common/Icon/Svg/DocumentIcon';
import NotificationIcon from '~/ui/common/Icon/Svg/NotificationIcon';

export const Tabs = {
	task: { id: '1', text: 'Task', /*icon: TaskIcon*/ },
	request: { id: '2', text: 'Request', /*icon: RequestIcon*/ },
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
				tabs={[Tabs.task, Tabs.request]}
				onTabChange={onTabChange}
			/>
		</AppHeader>
	);
}

export default Header;
