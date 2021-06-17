import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';

import Header, { Tabs } from '~/components/Home/Header';
import Feed from '~/components/Home/Feed';
import Event from '~/components/Home/Event';

const Container = styled(View)`
	background: transparent;
`;

function Home() {
  const [tab, setTab] = React.useState(Tabs.feed);
  return (
    <Container>
      <Header title="Home" tab={tab} onTabChange={setTab} />
      {tab.id === Tabs.feed.id ? <Feed /> : <Event />}
    </Container>
  );
}

export default Home;
