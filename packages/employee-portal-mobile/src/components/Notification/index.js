import React from 'react';

import { Dimensions } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';

import Header from './Header';
import List from './List';

const Container = styled(View)`
	background: #FFF;
  min-height: ${Dimensions.get('window').height}px;
`

function Notification({ notification, userId, getNotifications }) {
  console.log(notification);

  React.useEffect(() => {
    getNotifications(userId, 0);
  }, []);

  const { items, offset } = notification;
  function handleLoadMore() {
    getNotifications(userId, offset);
  }

  return (
    <Container>
      <Header />
      <List items={items} onLoadMore={handleLoadMore} />
    </Container>
  );
}

export default Notification;
