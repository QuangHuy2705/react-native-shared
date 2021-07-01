import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import Header, { Tabs } from '~/components/Work/Header';
import Task from '~/containers/Work/Task';
import Request from '~/containers/Work/Request';

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
