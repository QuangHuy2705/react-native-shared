import React from 'react';
import styled from 'styled-components';

import moment from 'moment';
import { convertTimeSince } from '~/shared/utils/function';
import View from '~/ui/primitives/View';
import ScrollView from '~/components/common/ScrollView';
import Blank from '~/components/Blank';

import NotificationGroup from './NotificationGroup';

const Container = styled(View)`
  margin-top: 10px;
`;

export default function List({ items }) {

  const groupMap = {};
  const now = new Date();
  const format = 'MMM DD, YYYY';
  const todayName = moment(now).format(format);
  now.setDate(now.getDate() - 1);
  const yesterdayName = moment(now).format(format);

  items.forEach(item => {
    let name = moment(item.createdTime).format(format);
    if (name === todayName) { name = 'Today'; }
    if (name === yesterdayName) { name = 'Yesterday'; }

    const group = groupMap[name] || { id: name, name, notifications: [], sortValue: item.createdTime };
    group.notifications.push({
      ...item,
      time: convertTimeSince(moment(item.createdTime).format('YYYY-MM-DD HH:mm:ss'))
    });
    groupMap[name] = group;
  });

  const groups = Object.values(groupMap).sort((g1, g2) => g2.sortValue - g1.sortValue);

  return (
    <ScrollView spacing={250} style={{ background: '#fff' }}>
      <Container>
        {groups.map((g, idx) => (
          <NotificationGroup
            key={g.id}
            name={g.name}
            notifications={g.notifications}
            isLast={idx === groups.length - 1}
          />
        ))}
        {groups.length === 0 && (<Blank style={{ padding: 32 }} title="You Have No Notification" />)}
      </Container>
    </ScrollView>
  );
}
