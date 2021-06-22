import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import NotificationGroup from './NotificationGroup';

const Container = styled(View)`
	background: #FFF;
`;

export default function List() {
  const meetingNotif = {
    id: 1,
    templateId: 'meeting',
    owner: { id: 1, name: 'Doanh. Võ Thị Mỹ', photo: 'https://i.pravatar.cc/50' },
    time: '2 hour',
    meetingTime: '15 minutes',
    meetingRoom: 'Beijing'
  };
  const likeNotif = {
    id: 2,
    templateId: 'like',
    owner: { id: 1, name: 'Doanh. Võ Thị Mỹ', photo: 'https://i.pravatar.cc/50' },
    likes: 300,
    time: '2 hour',
    postTitle: 'Recruiting 10 people'
  };
  const commentNotif = {
    id: 3,
    templateId: 'comment',
    owner: { id: 1, name: 'Doanh. Võ Thị Mỹ', photo: 'https://i.pravatar.cc/50' },
    time: '2 hour',
    postTitle: 'Recruiting 10 people'
  };
  const taskNotif = {
    id: 4,
    templateId: 'task',
    owner: { id: 1, name: 'Doanh. Võ Thị Mỹ', photo: 'https://i.pravatar.cc/50' },
    time: '1 day',
    taskCount: '07'
  };
  const requestNotif = {
    id: 5,
    templateId: 'request',
    owner: { id: 2, name: 'Tú. Lê Thanh', photo: 'https://i.pravatar.cc/50' },
    time: '1 day',
    requestCategory: 'Work from home',
    requestStatus: 'Approved'
  };

  const groups = [
    {
      id: 1,
      name: 'Today',
      notifications: [meetingNotif, likeNotif, commentNotif]
    },
    {
      id: 2,
      name: 'Yesterday',
      notifications: [taskNotif, meetingNotif, likeNotif, commentNotif]
    },
    {
      id: 3,
      name: 'Oct 23, 2021',
      notifications: [requestNotif]
    }
  ];

  return (
    <Container>
      {groups.map((g, idx) => (
        <NotificationGroup
          key={g.id}
          name={g.name}
          notifications={g.notifications}
          isLast={idx === groups.length - 1}
        />
      ))}
    </Container>
  );
}
