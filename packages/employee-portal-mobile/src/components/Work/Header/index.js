import React from 'react';

import AppTabs from '~/components/common/Tabs';
import AppHeader from '~/components/common/Header';

import TaskIcon from '~/ui/common/Icon/Svg/TaskIcon';
import RequestIcon from '~/ui/common/Icon/Svg/DocumentIcon';

export const Tabs = {
	task: { id: '1', text: 'Task', icon: TaskIcon },
	request: { id: '2', text: 'Request', icon: RequestIcon },
};

function Header({ title, tab, onTabChange }) {
	return (
		<AppHeader
			title={title}
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
