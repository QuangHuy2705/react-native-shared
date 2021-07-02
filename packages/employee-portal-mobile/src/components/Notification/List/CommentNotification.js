import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

import Icon from '~/ui/common/Icon/Svg/CommentNotiIcon';
import Avatar from '~/components/common/Profile/Avatar';

import ItemContainer from './ItemContainer';

const IconContainer = styled(View)`
	position: relative;
  padding-right: 2px;
`;

const Marker = styled(View)`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Bold = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 14px;
`;

export default function Notification({ notification: { from, owner, isMine, time, message: postTitle } }) {
  return (
    <ItemContainer
      onPress={() => { }}
      time={time}
      iconRender={
        () => (
          <IconContainer>
            <Avatar width="40" height="40" source={{ uri: from.photo }} />
            <Marker><Icon /></Marker>
          </IconContainer>
        )
      }
    >
      <Bold>{from.name} </Bold>
      <Description>
        commented on {isMine ? 'your' : <><Description style={{ fontWeight: 'bold' }}>{owner.name}</Description>'s</>} post: {postTitle}.
      </Description>
    </ItemContainer>
  )
}
