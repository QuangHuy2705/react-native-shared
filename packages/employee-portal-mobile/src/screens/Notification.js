import React from 'react';

import { Dimensions } from 'react-native';
import styled from 'styled-components';

import View from '~/ui/primitives/View';

import Header from '~/components/Notification/Header';
import List from '~/components/Notification/List';

const Container = styled(View)`
	background: #FFF;
  min-height: ${Dimensions.get('window').height}px;
`

function Notification() {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  );
}

export default Notification;
