import React from 'react';
import styled from 'styled-components';

import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';
import Text from '~/ui/primitives/Text';
import Avatar from './Avatar';

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 40px;
`;

const Content = styled(View)`
  flex: 1;
  margin-left: 8px;
`;

const Name = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: #000;
`;

const Description = styled(Text)`
  color: #828282;
  font-size: 12px;
`;

function ProfileBox({ profile }) {
  const { name, photo, description } = profile;
  function showProfile() { }

  return (
    <Touchable flex={1} onPress={showProfile}>
      <Container>
        <Avatar width="40" height="40" source={{ uri: photo }} />
        <Content>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Content>
      </Container>
    </Touchable>
  )
}

export default ProfileBox;
