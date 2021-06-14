import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import CaretRightIcon from '~/ui/common/Icon/Svg/CaretRightIcon';
import PublicIcon from '~/ui/common/Icon/Svg/PublicIcon';
import Avatar from './Avatar';

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const Content = styled(View)`
  flex: 1;
  margin-left: 8px;
`;

const RowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Name = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  color: #000;
`;

const Description = styled(Text)`
  color: #828282;
  font-size: 14px;
  padding-bottom: 2px;
  margin-right: 4px;
`;

function Profile2ProfileBox({ from, to }) {
  const { name, photo, description } = from;
  function showProfile() { }

  return (
    <Container>
      <Touchable onPress={() => showProfile(from)}>
        <Avatar width={36} height={36} source={{ uri: photo }} />
      </Touchable>
      <Content>
        <RowContainer>
          <Touchable onPress={() => showProfile(from)}>
            <Name>{name} </Name>
          </Touchable>
          <CaretRightIcon />
          <Touchable onPress={() => showProfile(to)}>
            <Name> {to.name}</Name>
          </Touchable>
        </RowContainer>
        <RowContainer marginTop={4}>
          <Description>{description} </Description>
          <PublicIcon />
        </RowContainer>
      </Content>
    </Container>
  )
}

export default Profile2ProfileBox;
