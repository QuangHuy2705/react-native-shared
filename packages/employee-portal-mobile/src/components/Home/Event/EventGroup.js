import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';
import EventItem from './EventItem';

const Container = styled(View)`
  ${'' /* width: ${Dimensions.get('window').width}px; */}
  margin-bottom: 16px;
`;

const Title = styled(Text)`
  margin: 8px;
  font-size: 14px;
  color: #4F4F4F;
  text-transform: uppercase;
`;

export default function EventGroup({ name, events }) {
  return (<Container>
    <Title>{name}</Title>
    {events.map(e => <EventItem key={e.id} event={e} />)}
  </Container>);
}
