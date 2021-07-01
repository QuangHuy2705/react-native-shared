import React from 'react';

import styled from 'styled-components';
import moment from 'moment';

import { ActivityIndicator, Dimensions } from 'react-native';
import ScrollView from '~/components/common/ScrollView';

import View from '~/ui/primitives/View';
import Blank from '~/components/Blank';

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
  min-height: ${Dimensions.get('window').height - 360}px;
`;

function getGroupName(date) {
  const format = 'dddd, MMM DD';
  const name = moment(date).format(format);
  return moment().format(format) === name ? 'TODAY' : name;
}

function EventList({ events, getEvents }) {
  const [date, setDate] = React.useState(new Date(Date.now() + 24 * 60 * 60000));
  const key = moment(date).format('YYYY-MM-DD');
  React.useEffect(() => {
    getEvents(key);
  }, [key]);

  const groups = events[key] && [{
    id: key,
    name: getGroupName(date),
    events: events[key].map(e => ({
      ...e,
      title: e.subject,
      time: `${moment(e.startEvent).format('hh:mm')} - ${moment(e.endEvent).format('hh:mm')}`,
    }))
  }];

  return (
    <Container>
      <ScrollView>
        <Calendar date={date} onChange={setDate} />
        <Content>
          {groups
            ? groups.map(g => <EventGroup key={g.id} name={g.name} events={g.events} />)
            : (<ActivityIndicator
              size="large"
              color="#0000ff"
              style={{ alignSelf: 'center', marginTop: 32 }}
            />)
          }
          {events[key] && events[key].length === 0 && (
            <Blank style={{ marginTop: 50 }} title="No Upcoming Event" />
          )}
        </Content>
      </ScrollView>
    </Container>
  );
}

export default EventList;
