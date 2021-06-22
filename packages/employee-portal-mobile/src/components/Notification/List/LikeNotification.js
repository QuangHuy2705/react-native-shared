import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Text from '~/ui/primitives/Text';

import Icon from '~/ui/common/Icon/Svg/LikeNotiIcon';
import Avatar from '~/components/common/Profile/Avatar';

import ItemContainer from './ItemContainer';

const IconContainer = styled(View)`
	position: relative;
`;

const Marker = styled(View)`
  position: absolute;
  bottom: 0px;
  right: 2px;
`;

const Bold = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 14px;
`;

export default function Notification({ notification: { owner, time, likes, postTitle } }) {
  return (
    <ItemContainer
      onPress={() => { }}
      time={time}
      iconRender={
        () => (
          <IconContainer>
            <Avatar width="40" height="40" source={{ uri: owner.photo }} />
            <Marker><Icon /></Marker>
          </IconContainer>
        )
      }
    >
      <Bold>{owner.name} </Bold>
      <Description>
        {likes > 0 ? ` and ${likes} others ` : ' '}
        liked your posts: “{postTitle}”.
      </Description>
    </ItemContainer>
  )
}
