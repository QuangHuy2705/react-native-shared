import React from 'react';

import styled from 'styled-components';

import View from 'employee-portal-shared/src/components/primitives/View';

import Header, { Tabs } from '~/components/Work/Header';
import Task from '~/components/Work/Task';
import Request from '~/components/Work/Request';

const Container = styled(View)`
	background: transparent;
`;

function Work() {
	const [tab, setTab] = React.useState(Tabs.task);
	return (
		<Container>
			<Header title="Work" tab={tab} onTabChange={setTab} />
			{tab.id === Tabs.task.id ? <Task /> : <Request />}
		</Container>
	)
}

export default Work;
