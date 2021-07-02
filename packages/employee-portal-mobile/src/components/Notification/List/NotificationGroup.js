import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

import LikeNotification from './LikeNotification';
import CommentNotification from './CommentNotification';
import MeetingNotification from './MeetingNotification';
import TaskNotification from './TaskNotification';
import RequestNotification from './RequestNotification';

const Container = styled(View)`
	background: #fff;
  ${({ isLast }) => isLast && `
    margin-bottom: 70px;
  `}
`;

const Line = styled(View)`
  margin: 8px 16px 16px 16px;
  background: #BDBDBD;
  opacity: 0.79;
  height: 0.5px;
`;

const Bold = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const TEMPLATES = {
  like: LikeNotification,
  comment: CommentNotification,
  meeting: MeetingNotification,
  task: TaskNotification,
  request: RequestNotification
}

function getTemplate(templateId) {
  switch (templateId) {
    case 2:
      return 'comment';
    case 3:
    default:
      return 'like';
  }
}

export default function NotificationGroup({ isLast, name, notifications }) {
  return (
    <Container isLast={isLast}>
      <Bold>{name}</Bold>
      {notifications.map(n => {
        const Template = TEMPLATES[getTemplate(n.templateId)];
        return Template && <Template key={n.id} notification={n} />
      })}
      {!isLast && <Line />}
    </Container>
  );
}
