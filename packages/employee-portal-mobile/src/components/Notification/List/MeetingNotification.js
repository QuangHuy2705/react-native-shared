import React from 'react';
import styled from 'styled-components';

import Text from '~/ui/primitives/Text';

import Icon from '~/ui/common/Icon/Svg/MeetingNotiIcon';
import Tag from '~/components/common/Tag'

import ItemContainer from './ItemContainer';

const Bold = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 14px;
`;

export default function Notification({ notification: { owner, time, meetingRoom, meetingTime } }) {
  return (
    <ItemContainer
      onPress={() => { }}
      time={time}
      iconRender={
        () => (
          <Icon />
        )
      }
      actionRender={
        () => (<Tag variant='warn'>Direct</Tag>)
      }
    >
      <Description>
        Your meeting at <Bold> {meetingRoom} room </Bold> will start in {meetingTime}.
      </Description>
    </ItemContainer>
  )
}
