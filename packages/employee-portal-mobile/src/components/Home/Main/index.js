import React from 'react';
import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Header, { Tabs } from '~/components/Home/Header';
import Feed from '~/containers/Home/Feed';
import Event from '~/components/Home/Event';
import Group from '~/containers/Home/Group';

const Container = styled(View)`
	background: transparent;
`;

function Home() {
  const [tab, setTab] = React.useState(Tabs.feed);

	const MainContent = {
		[Tabs.feed.id]: <Feed />,
		[Tabs.event.id]: <Event />,
		[Tabs.group.id]: <Group />
	}
  return (
    <Container>
      <Header title="Home" tab={tab} onTabChange={setTab} />
			{MainContent[tab.id]}
    </Container>
  );
}

export default Home;
