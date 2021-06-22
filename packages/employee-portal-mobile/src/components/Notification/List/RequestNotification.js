import React from 'react';
import styled from 'styled-components';

import Text from '~/ui/primitives/Text';

import Icon from '~/ui/common/Icon/Svg/RequestNotiIcon';

import ItemContainer from './ItemContainer';

const Bold = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`;

const Description = styled(Text)`
  font-size: 14px;
`;

export default function Notification({ notification: { owner, time, requestCategory, requestStatus } }) {
  return (
    <ItemContainer
      onPress={() => { }}
      time={time}
      iconRender={
        () => (<Icon />)
      }
    >
      <Description>
        You request “<Bold>{requestCategory}</Bold>” has been
        <Bold> {requestStatus} </Bold>
        by
        <Bold> {owner.name} </Bold>.
      </Description>
    </ItemContainer>
  )
}
