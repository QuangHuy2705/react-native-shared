import React from 'react';

import AppTabs from '~/components/common/Tabs';
import AppHeader from '~/components/common/Header';

import ActivityIcon from '~/ui/common/Icon/Svg/ActivityIcon';
import CalendarIcon from '~/ui/common/Icon/Svg/CalendarIcon';

export const Tabs = {
	feed: { id: '1', text: 'Feed', icon: ActivityIcon },
	event: { id: '2', text: 'Event', icon: CalendarIcon },
};

function Header({ title, tab, onTabChange }) {
	return (
		<AppHeader
			title={title}
		>
			<AppTabs
				tab={tab}
				tabs={[Tabs.feed, Tabs.event]}
				onTabChange={onTabChange}
			/>
		</AppHeader>
	);
}

export default Header;
