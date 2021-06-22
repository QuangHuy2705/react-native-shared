import React from 'react';

import { StatusBar, Platform } from 'react-native';

import styled from 'styled-components';
import View from '~/ui/primitives/View';
import Touchable from '~/ui/primitives/Touchable';

import { Heading2 as Heading } from '~/ui/primitives/Text';

const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;

const Container = styled(View)`
    background: #fff;
    padding: ${24 + STATUS_BAR_HEIGHT}px 16px 16px 16px;
`;

const TopContainer = styled(View)`
    flex-direction: row;
`;

const ActionContainer = styled(Touchable)`
    margin-left: 4px;
`;

const Title = styled(Heading)`
  flex: 1;
  font-weight: bold;
  font-size: 24px;
  padding: 0;
  margin: 0 0 8px 0;
`;

function Header({ title, children, actions }) {
  return (
    <Container>
      <TopContainer>
        <Title>{title}</Title>
        {actions.map(a => (
          <ActionContainer key={a.id} onPress={a.onPress}>
            <a.icon />
          </ActionContainer>
        ))}
      </TopContainer>
      {children}
    </Container>
  );
}

Header.defaultProps = {
  actions: []
};

export default Header;
