import React from 'react';

import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Calendar from './Calendar';
import EventGroup from './EventGroup';

const Container = styled(View)`
	background: transparent;
  align-items: center;
  justify-content: center;
`;

const Content = styled(View)`
	background: #FFF;
  margin-top: 16px;
`;

function EventList() {
  const members = [
    { id: 1, photo: 'https://i.pravatar.cc/50' },
    { id: 2, photo: 'https://i.pravatar.cc/50' },
    { id: 3, photo: 'https://i.pravatar.cc/50' },
    { id: 4, photo: 'https://i.pravatar.cc/50' },
    { id: 5, photo: 'https://i.pravatar.cc/50' },
  ];

  const groups = [
    {
      id: 1,
      name: 'TODAY',
      events: [
        {
          id: 1,
          title: 'Meeting with TS team',
          members: members,
          time: '09:00 - 10:00',
          location: 'Beijing Room - V1 - F1 - Green Zone'
        }, {
          id: 2,
          title: 'Review Design',
          time: '13:00 - 14:00',
          members: members,
          location: 'Beijing Room - V1 - F1 - Green Zone'
        }
      ]
    },
    {
      id: 2,
      name: 'Wednesday, OCT 9',
      events: [
        {
          id: 1,
          title: 'Meeting with TS team',
          time: '09:00 - 10:00',
          members: members,
          location: 'Beijing Room - V1 - F1 - Green Zone'
        }, {
          id: 2,
          title: 'Review Design',
          members: members,
          time: '13:00 - 14:00',
          location: 'Beijing Room - V1 - F1 - Green Zone'
        }
      ]
    },
  ];

  return (
    <Container>
      <Calendar />
      <Content>
        {groups.map(g => <EventGroup key={g.id} name={g.name} events={g.events} />)}
      </Content>
    </Container>
  );
}

export default EventList;
